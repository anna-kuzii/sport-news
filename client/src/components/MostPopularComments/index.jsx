import React from 'react';
import NewsBlock from '../NewsBlock';
import './style.scss';

export const MostPopularComments = ({ blockTitle }) => (

  <div className='most-popular-comments-wrapper'>
    <div className='block-title'>
      <h3> {blockTitle} </h3>
      <hr />
    </div>
    <div className='popular-news-block'>
      <NewsBlock />
    </div>
  </div>
);
