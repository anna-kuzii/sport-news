import React, { Component } from 'react'
import SliderArticles from '../../assets/data/slider'

export class NewsSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentArticle: 1,
    }

    this.handleNextSlide = this.handleNextSlide.bind(this)
    this.handlePrevSlide = this.handlePrevSlide.bind(this)

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




  render() {
    const { currentArticle } = this.state
    return (
      <div className='news-slider-container'>
        <img src={SliderArticles[currentArticle - 1].img} alt='sosu' />
        <div className='news-info'>
          <p className='publish-time'>Published / 20.09.2019</p>
          <p className='title'>{SliderArticles[currentArticle - 1].title}</p>
          <p className='news-text'>{SliderArticles[currentArticle - 1].text}</p>
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
          <button className={currentArticle === 1 ? 'current-slide': ''} >01</button>
          <button className={currentArticle === 2 ? 'current-slide': ''} >02</button>
          <button className={currentArticle === 3 ? 'current-slide': ''} >03</button>
          <button className={currentArticle === 4 ? 'current-slide': ''} >04</button>
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
    )
  }
}
