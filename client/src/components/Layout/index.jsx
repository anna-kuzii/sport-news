import React from 'react';

import { Header } from '../Header';
import { Menu } from '../Menu';
import menuData from '../../assets/data/menuItems';
import { MostPopularComments } from '../MostPopularComments';
import { Copyright } from '../Copyright';
import { Footer } from '../../containers/Footer/component';


export const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Menu menuList={menuData.menu} />
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
      <Copyright />
    </div>
  );
};
