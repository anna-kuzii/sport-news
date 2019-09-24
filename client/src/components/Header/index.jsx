import React from 'react';
import { Logo } from '../Logo';
import UserDropdown from '../UserDropdown';
import { Share } from '../Share';
import searchIcon from '../../assets/img/search-icon.svg';
import './style.scss';

export const Header = () => (
  <div className='header'>
    <div className='main-container'>
      <div className='before-logo' />
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='search'>
        <label htmlFor='search-input'>
          <img src={searchIcon} alt='' />
        </label>
        <input
          type='text'
          placeholder='Search by'
          id='search-input'
        />
      </div>
      <div className='share'>
        <Share />
      </div>
      <div className='profile'>
        <UserDropdown />
      </div>
      <div className='language'>
        EN
      </div>
    </div>
  </div>
);
