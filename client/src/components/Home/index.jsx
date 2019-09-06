import React from 'react';
import { Breakdown } from '../Breakdown';
import BreakDown from '../../assets/data/BreakdownNewsList';
import SingleNews from '../../assets/data/SingleNews';
import NewsOfTheDays from '../../containers/NewsOfTheDays/component';

import './style.scss';

export const Home = () => (

  <div className='home-page-wrapper'>
    <div className='breakdown-container'>
      <Breakdown
        singleNews={SingleNews}
        newsBlock={BreakDown}
      />
    </div>
    <div className='newsOfTheDayContainer'>
      <NewsOfTheDays />
    </div>
    <div className='most-container'>
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
);
