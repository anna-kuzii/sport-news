import React from 'react'

import { MostPopularComments } from '../MostPopularComments'
import { NewsSlider } from '../NewsSlider'
import MostPopular from '../../assets/data/MostPopularNewsList'
import MostComments from '../../assets/data/MostCommentsNewsList'

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='slider-container'>
      <NewsSlider />
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
