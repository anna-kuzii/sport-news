import React from 'react'
import { NewsBlock } from '../NewsBlock'
import { SingleNews } from '../SingleNews'


export const Breakdown = ({ singleNews, news_block }) => (
  <div className='breakdown-wrapper'>
    <div className='news-divider'>
      <p>breakdown</p>
    </div>
    <div className='news-container'>
      <div className='single-news-block'>
        <SingleNews singleNews={singleNews} />
        <SingleNews singleNews={singleNews} />
      </div>
      <div className='news-boxes'>
        <div className='news-box'>
          <NewsBlock
            newsBlock={news_block}
          />
        </div>
        <div className='news-box'>
          <NewsBlock
            newsBlock={news_block}
          />
        </div>
      </div>
    </div>
  </div>
)
