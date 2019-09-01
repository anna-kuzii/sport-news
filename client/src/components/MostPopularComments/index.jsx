import React from 'react'
import NewsBlock from '../SingleNews'


export const MostPopularComments = (props) => {
  const { block_title, news } = props

  return (
    <div className='most-popular-comments-wrapper'>
      <div className='block-title'>
        <h3>{block_title}</h3>
        <hr />
      </div>
      <div className='news-block'>
        <NewsBlock
          newsBlock={news}
        />
      </div>
    </div>
  )
}