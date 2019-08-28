import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const NewsOfTheDays = (props) => {
  const { image, tittle, text, photo_courtesy, full_news } = props
  function showSeeMoreButton(text, full_news) {
    return text.length <100 ? text
      : <p>{text.slice(0, 60)}<Link to={full_news} className='see-more'> ...</Link></p>
  }

  return (
    <div className='newsofthedayWrapper'>
      <div className='newsDivider'>
        <p>photo of the day</p>
      </div>
      <div className='newsBlock'>
        <img src={image} alt='background' />
        <div className='photoOftheDayTriangle'>
          <p>photo<span><br />of the<br /></span>day</p>
        </div>
        <div className='textOfNews'>
          <h1 className='title'>{tittle}</h1>
          <p className='newsText'>{showSeeMoreButton(text, full_news)}</p>
          <div className='photoCourtesy'>{photo_courtesy}</div>
        </div>
      </div>
    </div>
  )
}
