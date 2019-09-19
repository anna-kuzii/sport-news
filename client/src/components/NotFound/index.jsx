import React from 'react';
import loginBg from '../../assets/img/register-login-bg.jpg';
import { Logo } from '../Logo';
import './style.scss';

export const NotFound =()=> (
  <div className='not-found-container '>
    <div className='container-fluid'>
      <div className='bg-img'>
        <Logo />
        <img src={loginBg} alt='background' />
      </div>
      <div className='message-wrapper'>
        <h1> 404 </h1>
        <p> There&apos;s nothing to see here <br /> </p>
      </div>
    </div>
  </div>
);
