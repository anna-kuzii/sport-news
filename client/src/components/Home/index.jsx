import React from 'react';
import { NewsSlider } from '../NewsSlider';
import { Breakdown } from '../Breakdown';
import { Layout } from '../Layout';
import NewsOfTheDays from '../../containers/NewsOfTheDays/component';
import './style.scss';

export const Home = () => (
  <Layout>
    <div className='home-page-wrapper'>
      <div className='slider-container'>
        <NewsSlider />
      </div>
      <div className='breakdown-container'>
        <Breakdown />
      </div>
      <div className='newsOfTheDayContainer'>
        <NewsOfTheDays />
      </div>
    </div>
  </Layout>
);
