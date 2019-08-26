import React from 'react'
import { Logo } from '../Logo'
import UserDropdown from '../UserDropdown'
import { Share } from '../Share'
import search_icon from '../../assets/img/search-icon.svg'

export const Header = () => (
  <div className='header'>
    <div className='header-logo'>
      <Logo />
    </div>
    <div className='search-by'>
      <img src={search_icon} alt='' />
      <input type='text' placeholder='Search by' />
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
)
