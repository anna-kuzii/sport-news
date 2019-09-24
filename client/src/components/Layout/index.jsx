import React from 'react';

import { Header } from '../Header';
import { MenuWrapper } from '../Menu';
import menuData from '../../assets/data/menuItems';
import { MostPopularComments } from '../MostPopularComments';
import { Copyright } from '../Copyright';
import { Footer } from '../../containers/Footer/component';


export const Layout = ({ children }) => (
  <div>
    <Header />
    <div className='main-container'>
      <MenuWrapper menuList={menuData.menu} />
      {children}
      <div className='most-wrapper'>
        <div className='most-news-container'>
          <MostPopularComments
            blockTitle='most popular'
          />
          <MostPopularComments
            blockTitle='most comments'
          />
        </div>
      </div>
      <Footer />
    </div>
    <Copyright />
  </div>
);

