import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <div className='logo'>
    <Link to='/'>Sport News</Link>
  </div>
);
