import React, { Component } from 'react';
import loginBg from '../../../assets/img/register-login-bg.jpg';
import { Link } from 'react-router-dom';
import { resetPassword } from '../action';
import { connect } from 'react-redux';
import { Logo } from '../../../components/Logo';
import './style.scss';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      confirmPassword: '',
      errors: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    const { resetPassword, match } = this.props;
    const { id, token } = match.params;
    const data = {
      password: newPassword,
      token,
      userId: id,
    };

    if (newPassword !== confirmPassword) {
      this.setState({ errors: 'Password do not match' });
    } else {
      resetPassword(data);
    }
  }

  render() {
    const { newPassword, confirmPassword, errors } = this.state;
    const { error } = this.props;

    return (
      <div className='reset-password-container '>
        <div className='container-fluid'>
          <div className='bg-img'>
            <Logo />
            <img src={loginBg} alt='background' />
          </div>
          <div className='reset-password-form'>
            <div className='get-started'>
              <h3>Don&#39;t have an account?</h3>
              <Link to='/register' className='btn btn-primary'>Get Started</Link>
            </div>
            <div className='reset-password-wrapper'>
              <h2>Please enter your new password.</h2>
              {errors && <span className='reset-password-error'>{errors}</span>}
              {error && <span className='reset-password-error'>{error}</span>}
              <div className='password-wrapper'>
                <label htmlFor='new-password-input'>New password</label>
                <input
                  type='password'
                  id='new-password-input'
                  placeholder='new password'
                  name='newPassword'
                  value={newPassword}
                  onChange={this.handleChange}
                />
                <label htmlFor='password-input'>Password</label>
                <input
                  type='password'
                  id='confirm-password-input'
                  placeholder='confirm password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type='button'
                className='btn btn-primary reset-password'
                onClick={this.handleSubmit}
              >set new password
              </button>
              <div className='sign-up'>
                <Link to='/register' className='sign-up'>Don&#39;t have an account?</Link>
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

const mapState = ({ resetPassword: { error } }) => ({
  error,
});

const actionCreators = {
  resetPassword,
};

const connectedResetPasswordPage = connect(mapState, actionCreators)(ResetPassword);

export { connectedResetPasswordPage as ResetPassword };
