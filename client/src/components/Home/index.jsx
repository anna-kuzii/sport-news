import React from 'react'
import { MostPopularComments } from '../MostPopularComments'
import MostPopular from '../MostPopularComments/MostPopularNewsList'

export const Home = () => (
  <div className='home-page-wrapper'>
    <div className='most-container'>
      <MostPopularComments
        block_title='most popular'
        news={MostPopular}
      />
      <MostPopularComments block_title='most comments' />
    </div>
  </div>
)
