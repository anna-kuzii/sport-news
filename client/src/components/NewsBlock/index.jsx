import React from 'react'
import hover_arrow from '../../assets/img/news-hover-arrow.svg'
import { Link } from 'react-router-dom'

export default function NewsBlock({ newsBlock }) {
  return (
    newsBlock.map(element => (
      <div className='news-block' key={element.id}>
        <img src={element.image} alt='News block' />
        <div key={element.id}>
          <h4>{element.title}</h4>
          <p>{element.text}</p>
        </div>
        <Link>
          <img
            src={hover_arrow}
            alt='hover arrow'
            className='hover-arrow'
          />
        </Link>
      </div>
    ))
  )
}
