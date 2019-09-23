import React, { Component } from 'react';
import signupBg from '../../../assets/img/register-login-bg.jpg';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo';

import FormValidator from '../../../utils/FormValidator';
import { rules } from '../../../utils/FormValidator/rules';
import { register } from '../action';
import { connect } from 'react-redux';
import './style.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(rules);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      validation: this.validator.createValidObj(),
      submitted: false,
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { isAuthenticated, history } = this.props;

    if (isAuthenticated) {
      history.push('/');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const state = this.state;
    const newUser = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
    };
    const { register } = this.props;
    const validation = this.validator.validate(state);

    this.setState((prevState) => ({
      ...prevState,
      validation: this.validator.validate(prevState),
      submitted: true,
    }));
    if (validation.isValid) {
      register(newUser);
    }
  }

  render() {
    const { validation, firstName, lastName, email, password } = this.state;
    const validationChecker = this.submitted
      ? this.validator.validate(this.state)
      : validation;
    const { error } = this.props;

    return (
      <div className='register-container '>
        <div className='container-fluid'>
          <div className='bg-img'>
            <Logo />
            <img src={signupBg} alt='sign up background' />
          </div>
          <div className='create-account-form'>
            <div className='log-in'>
              <h3>Already have an account?</h3>
              <Link to='/login' className='btn btn-primary login'>Log In</Link>
            </div>
            <div className='create-account-wrapper'>
              <h2>Create Account</h2>
              <a
                href='http://facebook.com'
                className='btn fb-icon'
              >facebook
              </a>
              <a
                href='http://google.com'
                className='btn gplus-icon'
              >google</a>
              <p>Or use your email for registration</p>
              { error
              && <span className='register-error'>{error}</span>
              }
              <div className='user-info'>
                <div className={validationChecker.firstName.isInvalid ? 'has-error first-name': 'first-name'}>
                  <label htmlFor='first-name-input'>First name</label>
                  <input
                    type='text'
                    id='first-name-input'
                    placeholder='John'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validationChecker.firstName.message}</span>
                </div>
                <div className={validationChecker.lastName.isInvalid ? 'has-error last-name' : 'last-name'}>
                  <label htmlFor='last-name-input'>Last name</label>
                  <input
                    type='text'
                    id='last-name'
                    placeholder='Doe'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validationChecker.lastName.message}</span>
                </div>
              </div>
              <div className='email-wrapper'>
                <div className={validationChecker.email.isInvalid ? 'has-error' : 'undefined'}>
                  <label htmlFor='email-input'>Email</label>
                  <input
                    type='email'
                    id='email-input'
                    placeholder='johndoe@gmail.com'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validationChecker.email.message}</span>
                </div>
                <div className={validationChecker.password.isInvalid ? 'has-error' : 'undefined'}>
                  <label htmlFor='password-input'>Password</label>
                  <input
                    type='password'
                    id='password-input'
                    placeholder='4+ characters'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validationChecker.password.message}</span>
                </div>
              </div>
              <button
                type='button' onClick={this.handleSubmit}
                className='btn btn-primary sing-up'
              >sign up</button>
              <div className='mobile-link'>
                <Link to='/login' className='mobile-link'>Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapState = ({ registration: { error }, login: { isAuthenticated } }) =>({
  error,
  isAuthenticated,
});

const actionCreators = {
  register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(Register);

export { connectedRegisterPage as Register };
