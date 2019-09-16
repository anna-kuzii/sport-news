
import React from 'react';
import { NewsSlider } from '../../containers/NewsSlider/component';
import { Breakdown } from '../Breakdown';
import { Layout } from '../Layout';
import BreakDown from '../../assets/data/BreakdownNewsList';
import NewsOfTheDays from '../../containers/NewsOfTheDays/component';


import './style.scss';

export const Home = () => (
  <Layout>
    <div className='home-page-wrapper'>
      <div className='slider-container'>
        <NewsSlider />
      </div>
      <div className='breakdown-container'>
        <Breakdown
          newsBlock={BreakDown}
        />
      </div>
      <div className='newsOfTheDayContainer'>
        <NewsOfTheDays />
      </div>
    </div>
  </Layout>
);
