import React, { Fragment } from 'react'

export default function SingleNews({ singleNews }) {
  console.log(singleNews)
  const newsElements = singleNews.map(element =>(
    <div className='single-news' key={element.id}>
      <img src={element.image} alt='Single news' />
      <div className='news-decription' key={element.id}>
        <h4>{ element.title }</h4>
        <p>{ element.text }</p>
      </div>
    </div>
  ))

  return (
    <Fragment>
      {newsElements}
    </Fragment>
  )
}
