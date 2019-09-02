import React from 'react'
import { NewsBlock } from '../NewsBlock'


export const MostPopularComments = ({ block_title, news_block }) => (

  <div className='most-popular-comments-wrapper'>
    <div className='block-title'>
      <h3> {block_title} </h3>
      <hr />
    </div>
    <div className='popular-news-block'>
      <NewsBlock
        newsBlock={news_block}
      />
    </div>
  </div>
)
