import React from 'react';
import { NewsSlider } from '../NewsSlider';
import { Breakdown } from '../Breakdown';
import { Layout } from '../Layout';
import NewsOfTheDays from '../NewsOfTheDays';
import './style.scss';
import ScrollToTop from '../ScrollToTop';

export const Home = () => (
  <Layout>
    <ScrollToTop />
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
