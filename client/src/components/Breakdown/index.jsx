import React from 'react';
import NewsBlock from '../../containers/NewsBlock/component';
import SingleNews from '../../containers/SingleNews/component';
import './style.scss';

export const Breakdown = () => (
  <div className='breakdown-wrapper'>
    <div className='news-divider'>
      <p>breakdown</p>
    </div>
    <div className='news-container'>
      <div className='news-boxes'>
        <SingleNews />
        <div className='news-box'>
          <NewsBlock />
        </div>
      </div>
      <div className='news-boxes'>
        <SingleNews />
        <div className='news-box'>
          <NewsBlock />
        </div>
      </div>
    </div>
  </div>
);
