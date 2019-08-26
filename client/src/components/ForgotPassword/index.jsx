import React from 'react'
import login_bg from '../../assets/img/register-login-bg.jpg'
import { Link } from 'react-router-dom'

export const ForgotPassword = () => (
  <div className='forgot-password-container'>
    <div className='container-fluid'>
      <div className='bg-img'>
        <div className='logo'>
          <h1>Sport News</h1>
        </div>
        <img src={login_bg} alt='background ' />
      </div>
      <div className='forgot-password-form'>
        <div className='get-started'>
          <h3>Don`t have an account?</h3>
          <Link to='/register' className='btn btn-primary'>Get Started</Link>
        </div>
        <div className='forgot-password-wrapper'>
          <h2>Forgot your password?</h2>
          <p>Enter your email address below and well get you back on track.</p>
          <div className='email-wrapper'>
            <label htmlFor='email-input'>Email address</label>
            <input
              type='email'
              id='email-input'
              placeholder='Email@gmail.com'
            />
          </div>
          <button type='button' className='btn btn-primary forgot-password'>request reset link</button>
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
)
