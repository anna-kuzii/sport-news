import React from 'react';
import './style.scss';

export const Share = () => (
  <div className='services'>
    <span>Our Social Networks</span>
    <div>
      <a
        href='https://www.facebook.com/' target='_blank'
        className='facebook-icon icon'
      />
      <a
        href='https://twitter.com/' target='_blank'
        className='twitter-icon icon'
      />
      <a
        href='https://www.linkedin.com/' target='_blank'
        className='linkedin-icon icon'
      />
    </div>
  </div>
);
