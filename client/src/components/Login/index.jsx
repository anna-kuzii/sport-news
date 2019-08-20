import React from 'react'
import login_bg from '../../assets/img/register-login-bg.jpg'
import { Link } from 'react-router-dom'

export const Login = () => (
  <div className='login-container '>
    <div className='container-fluid'>
      <div className='bg-img'>
        <div className='logo-in-sign-up'>
          <h1>Sport News</h1>
        </div>
        <img src={login_bg} alt='background' />
      </div>
      <div className='log-in-form'>
        <div className='get-started'>
          <h3>Dont have an account?</h3>
          <Link to='/register' className='btn btn-primary'>Get Started</Link>
        </div>
        <div className='log-in-wrapper'>
          <h2>Log in to Sport News</h2>
          <div className='email-wrapper'>
            <label htmlFor='email-input'>Email address</label>
            <input
              type='email'
              id='email-input'
              placeholder='Email@gmail.com'
            />
            <div className='forgot-pass'>
              <label htmlFor='password-input'>Password</label>
              <Link to='/forgotpassword'>Forgot password?</Link>
            </div>
            <input
              type='password'
              id='password-input'
              placeholder='Enter your password'
            />
          </div>
          <button type='button' className='btn btn-primary log-in'>log in</button>
          <div className='mobile-link'>
            <Link to='/register' className='mobile-link'>Dont have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
