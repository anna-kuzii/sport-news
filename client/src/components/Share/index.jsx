import React from 'react';
import './style.scss';

export const Share = () => (
  <div className='services'>
    <span>Our Social Networks</span>
    <div>
      <a
        href='https://www.facebook.com/' target='_blank'
        className='facebook-icon icon'
      >Facebook</a>
      <a
        href='https://twitter.com/' target='_blank'
        className='twitter-icon icon'
      >Twitter</a>
      <a
        href='https://www.linkedin.com/' target='_blank'
        className='linkedin-icon icon'
      >Linked In </a>
    </div>
  </div>
);
