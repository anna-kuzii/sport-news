import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const NewsOfTheDays = (props) => {
  const { image, title, text, photo_courtesy, full_news } = props;

  const showSeeMoreButton = (text, full_news) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={full_news} className='see-more'> ...</Link></p>
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
          <p className='news-text'>{showSeeMoreButton(text, full_news)}</p>
          <div className='photo-courtesy'>{photo_courtesy}</div>
        </div>
      </div>
    </div>
  );
};
