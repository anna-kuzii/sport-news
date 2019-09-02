import React, { Component } from 'react';
import loginBg from '../../../assets/img/register-login-bg.jpg';
import { Link } from 'react-router-dom';
import { userActions } from '../action';
import { connect } from 'react-redux';
import { Logo } from '../../../components/Logo';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { forgotPassword } = this.props;

    forgotPassword({ email });
  }

  render() {
    const { email } = this.state;
    const { forgot } = this.props;

    return (
      <div className='forgot-password-container'>
        <div className='container-fluid'>
          <div className='bg-img'>
            <Logo />
            <img src={loginBg} alt='background ' />
          </div>
          <div className='forgot-password-form'>
            <div className='get-started'>
              <h3>Don`t have an account?</h3>
              <Link to='/register' className='btn btn-primary'>Get Started</Link>
            </div>
            <div className='forgot-password-wrapper'>
              <h2>Forgot your password?</h2>
              <p>Enter your email address below and well get you back on track.</p>
              {forgot.error
              && <span className='forgot-password-error'>{forgot.error}</span>
              }
              <div className='email-wrapper'>
                <label htmlFor='email-input'>Email address</label>
                <input
                  type='email'
                  id='email-input'
                  placeholder='Email@gmail.com'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type='button'
                className='btn btn-primary forgot-password'
                onClick={this.handleSubmit}
              >request reset link
              </button>
              <div className='sign-up'>
                <Link to='/register' className='sign-up'>Dont have an account?</Link>
              </div>
              <div className='sign-in'>
                <Link to='/login' className='sign-in'>Back to Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    forgot: state.forgotPassword,
  };
}

const actionCreators = {

  forgotPassword: userActions.forgotPassword,
};

const conectedForgotPasswordPage = connect(mapState, actionCreators)(ForgotPassword);

export { conectedForgotPasswordPage as ForgotPassword };
