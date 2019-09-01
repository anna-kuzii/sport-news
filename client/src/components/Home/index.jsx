import React from 'react'

import { MostPopularComments } from '../MostPopularComments'
import { NewsSlider } from '../NewsSlider'
import MostPopular from '../../assets/data/MostPopularNewsList'
import MostComments from '../../assets/data/MostCommentsNewsList'
import SliderArticles from '../../assets/data/slider'

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='slider-container'>
      <NewsSlider
        articles={SliderArticles}
      />
    </div>
    <div className='most-container'>
      <MostPopularComments
        block_title='most popular'
        news={MostPopular}
      />
      <MostPopularComments
        block_title='most comments'
        news={MostComments}
      />
    </div>
  </div>
)
