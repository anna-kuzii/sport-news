import React from 'react'
import { NewsSlider } from '../NewsSlider'
import SliderArticles from '../../assets/data/slider'

export const Home = () => (
  <div className='home-page'>
    <NewsSlider
      articles={SliderArticles}
    />
  </div>
)
