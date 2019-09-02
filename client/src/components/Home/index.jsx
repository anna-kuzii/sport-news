import React from 'react'

import { MostPopularComments } from '../MostPopularComments'
import { NewsSlider } from '../NewsSlider'
import { Breakdown } from '../Breakdown'
import MostPopular from '../../assets/data/MostPopularNewsList'
import MostComments from '../../assets/data/MostCommentsNewsList'
import BreakDown from '../../assets/data/BreakdownNewsList'
import SingleNews from '../../assets/data/SingleNews'

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='slider-container'>
      <NewsSlider />
    </div>
    <div className='breakdown-container'>
      <Breakdown
        singleNews={SingleNews}
        news_block={BreakDown}
      />
    </div>
    <div className='most-container'>
      <MostPopularComments
        block_title='most popular'
        news_block={MostPopular}
      />
      <MostPopularComments
        block_title='most comments'
        news_block={MostComments}
      />
    </div>
  </div>
)
