import React from 'react';
import hoverArrow from '../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import './style.scss';

export const SingleNews = ({ singleNews }) => (
  singleNews.map(element => (
    <div className='single-news' key={element.id}>
      <div className='single-news-logo'>
        <h2>{element.logo}</h2>
      </div>
      <img src={element.image} alt='Single news' />
      <div key={element.id}>
        <h4>{element.title}</h4>
      </div>
      <Link>
        <img
          src={hoverArrow}
          alt='hover arrow'
          className='hover-arrow'
        />
      </Link>
    </div>
  ))
);
