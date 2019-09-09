
import React from 'react';
import { NewsSlider } from '../../containers/NewsSlider';
import { Breakdown } from '../Breakdown';
import { Dealbook } from '../Dealbook';
import BreakDown from '../../assets/data/BreakdownNewsList';
import SingleNews from '../../assets/data/SingleNews';
import NewsOfTheDays from '../../containers/NewsOfTheDays/component';
import DealbookNews from '../../assets/data/DealbookNewsList';


import './style.scss';

export const Home = () => (

  <div className='home-page-wrapper'>
    <div className='slider-container'>
      <NewsSlider />
    </div>
    <Dealbook newsBlock={DealbookNews} />
    <div className='breakdown-container'>
      <Breakdown
        singleNews={SingleNews}
        newsBlock={BreakDown}
      />
    </div>
    <div className='newsOfTheDayContainer'>
      <NewsOfTheDays />
    </div>
  </div>
);
