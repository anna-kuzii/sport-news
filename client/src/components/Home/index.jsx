import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <div className='login-container '>
    <Link to='/register' >Get Started</Link>
    <Link to='/forgotpassword'>Forgot password?</Link>
    <Link to='/register' >Dont have an account?</Link>
  </div>
)
