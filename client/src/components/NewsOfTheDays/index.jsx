import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const NewsOfTheDays = (props) => {
  const { image, title, text, photoCourtesy, fullNews } = props;

  const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );

  return (
    <div className='newsoftheday-wrapper'>
      <div className='news-divider'>
        <p>photo of the day</p>
      </div>
      <div className='news-block'>
        <img src={image} alt='background' />
        <div className='photo-triangle'>
          <p>photo<span><br />of the<br /></span>day</p>
        </div>
        <div className='news-article'>
          <h1 className='title'>{title}</h1>
          <p className='news-text'>{showSeeMoreButton(text, fullNews)}</p>
          <div className='photo-courtesy'>{photoCourtesy}</div>
        </div>
      </div>
    </div>
  );
};
