import React, { Component } from 'react'
import articles from '../../assets/data/slider'
import hover_arrow from '../../assets/img/news-hover-arrow.svg'

export class NewsSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentArticle: 1,
    }

    this.handleNextSlide = this.handleNextSlide.bind(this)
    this.handlePrevSlide = this.handlePrevSlide.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleNextSlide(e) {
    e.preventDefault()
    if ( this.state.currentArticle === 4) {
      this.setState({ currentArticle: 1 })
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle + 1,
        }
      })
    }
  }

  handlePrevSlide(e) {
    e.preventDefault()
    if ( this.state.currentArticle === 1) {
      this.setState({ currentArticle: 4 })
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle - 1,
        }
      })
    }
  }

  handleClick(element) {
    this.setState({ currentArticle: element })
  }

  render() {
    const { currentArticle } = this.state
    const { articles } = this.props

    const arr = [ 1, 2, 3, 4 ]
    return (
      <div >
        <div className='news-slider-container'>
          <img src={articles[currentArticle - 1].img} alt='main article' />
          <div className='news-info'>
            <p className='publish-time'>Published / 20.09.2019</p>
            <p className='title'>{articles[currentArticle - 1].title}</p>
            <p className='news-text'>{articles[currentArticle - 1].text}</p>
            <button className='more-button'>More</button>
          </div>
          <div className='slider-controller'>
            <button className='slider-back' onClick={this.handlePrevSlide}>
              <svg
                version='1.1' xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 150 150'
              >
                <path d='m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z' />
              </svg>
            </button>
            {arr.map(element =>(
              <button className={currentArticle === element ? 'current-slide': ''} onClick={() =>this.handleClick(element)}>{'0'+element}</button>
            ))}

            <button className='slider-next' onClick={this.handleNextSlide}>
              <svg
                version='1.1' xmlns='http://www.w3.org/2000/svg'
                viewBox='-20 0 150 150'
              >
                <path d='m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='sub-articles-container'>
          {arr.map(element =>(
            <div className='sub-article' onClick={() =>this.handleClick(element)}>
              <img src={articles[element - 1].img} alt='sub article' />
              <p className='sub-article-title'> Lorem ipsum </p>
              <p className='sub-article-text'>{articles[element - 1].title}  </p>
              <img
                src={hover_arrow}
                alt='hover arrow'
                className='hover-arrow'
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
