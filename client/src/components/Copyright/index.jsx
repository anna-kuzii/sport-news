import React from 'react';
import './style.scss';
import { Logo } from '../Logo';

export const Copyright = () => (
  <div className='copyright-wrapper'>
    <div className='main-container'>
      <div className='copyright-container'>
        <Logo />
        <div className='copyright-items'>
          <h4>Copyright ©2019 Sport News</h4>
          <h4>Privacy/Terms</h4>
        </div>
      </div>
    </div>
  </div>
);
