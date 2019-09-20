import React from 'react';
import checkEmailBg from '../../../assets/img/register-login-bg.jpg';
import Mail from '../../../assets/img/mail.svg';
import MobileMail from '../../../assets/img/mobile-mail.svg';
import './style.scss';
import { Logo } from '../../../components/Logo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CheckEmail = (props) => (
  <div className='check-email-container'>
    <div className='container-fluid'>
      <div className='bg-img'>
        <Logo />
        <img src={checkEmailBg} alt='check email background' />
      </div>
      <div className='check-email-msg-wrapper'>
        <div className='get-started'>
          <h3>Dont have an account?</h3>
          <Link to='/register' className='btn btn-primary'>Get Started</Link>
        </div>
        <div className='check-email-msg'>
          <img
            src={Mail} className='mail-svg'
            alt='mail'
          />
          <img
            src={MobileMail} className='mobile-mail-svg'
            alt='mail'
          />
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <h2>{`Check your email ${props.email}`}</h2>
          <p>If there&#39;s Sport News account linked to this email address, we&#39;ll send over instructions to reset your password.</p>
          <div className='mobile-link'>
            <Link to='/register' className='mobile-link'>Dont have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapState = (state) => ({
  email: state.forgotPassword.email,
});

const connectedCheckEmailPage = connect(mapState)(CheckEmail);

export { connectedCheckEmailPage as CheckEmail };
