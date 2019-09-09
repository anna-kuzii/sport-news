
import React from 'react';
import { NewsSlider } from '../../containers/NewsSlider/component';
import { Breakdown } from '../Breakdown';
import BreakDown from '../../assets/data/BreakdownNewsList';
import SingleNews from '../../assets/data/SingleNews';
import './style.scss';

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='slider-container'>
      <NewsSlider />
    </div>
    <div className='breakdown-container'>
      <Breakdown
        singleNews={SingleNews}
        newsBlock={BreakDown}
      />
    </div>

  </div>
);
