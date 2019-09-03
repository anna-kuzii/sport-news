import React from 'react';
import { MostPopularComments } from '../MostPopularComments';
import { Breakdown } from '../Breakdown';
import MostPopular from '../../assets/data/MostPopularNewsList';
import MostComments from '../../assets/data/MostCommentsNewsList';
import BreakDown from '../../assets/data/BreakdownNewsList';
import SingleNews from '../../assets/data/SingleNews';
import './style.scss';

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='breakdown-container'>
      <Breakdown
        singleNews={SingleNews}
        newsBlock={BreakDown}
      />
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
