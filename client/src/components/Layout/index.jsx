import React from 'react';

import { Header } from '../Header';
import { Menu } from '../Menu';
import menuData from '../../assets/data/menuItems';
import { MostPopularComments } from '../MostPopularComments';
import MostPopular from '../../assets/data/MostPopularNewsList';
import MostComments from '../../assets/data/MostCommentsNewsList';
import { Copyright } from '../Copyright';


export const Layout = (props) => {
  const content = props;

  return (
    <div>
      <Header />
      <Menu menuList={menuData.menu} />
      {content.children}
      <div className='most-wrapper'>
        <div className='most-news-container'>
          <MostPopularComments
            blockTitle='most popular'
            newsBlock={MostPopular}
          />
          <MostPopularComments
            blockTitle='most comments'
            newsBlock={MostComments}
          />
        </div>
      </div>
      <Copyright />

    </div>
  );
};
