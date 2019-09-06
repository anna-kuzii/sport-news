import React from 'react';
import { Breakdown } from '../Breakdown';
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

  </div>
);
