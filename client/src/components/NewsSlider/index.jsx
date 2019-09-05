import React, { Component } from 'react';
import hoverArrow from '../../assets/img/news-hover-arrow.svg';
import { Swipe } from 'react-swipe-component';
import articles from '../../assets/data/slider';
import './style.scss';

let startArray = [];

if (articles.length < 4) {
  Array.from({ length: articles.length }, (elem, idx) => idx+1);
} else {
  startArray = [ 1, 2, 3, 4 ];
}

export class NewsSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentArticle: 1,
      articleArray: startArray,
    };

    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNextSlide(e) {
    const { currentArticle, articleArray } = this.state;

    e.preventDefault();
    if ( currentArticle === articles.length) {
      this.setState({ currentArticle: 1, articleArray: startArray });
    } else if ( articles.length > 4 && currentArticle === articleArray[3] ) {
      this.setState(state =>{
        const articleArray = state.articleArray.map(element => element + 1);

        return { articleArray, currentArticle: articleArray[3] };
      });
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle + 1,
        };
      });
    }
  }

  handlePrevSlide(e) {
    const { currentArticle, articleArray } = this.state;
    const articleLength = articles.length;

    let newArticleArray = [];

    if (articles.length < 4) {
      newArticleArray = startArray;
    } else {
      newArticleArray = [ articleLength-3, articleLength-2, articleLength-1, articleLength ];
    }

    e.preventDefault();
    if ( currentArticle === 1) {
      this.setState({ currentArticle: articleLength, articleArray: newArticleArray });
    } else if (articles.length > 4 && currentArticle === articleArray[0]) {
      this.setState(state =>{
        const articleArray = state.articleArray.map(element => element - 1);

        return { articleArray, currentArticle: articleArray[0] };
      });
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle - 1,
        };
      });
    }
  }

  handleClick(element) {
    this.setState({ currentArticle: element });
  }

  handleSwipeLeft = () => {
    const { currentArticle } = this.state;

    if ( currentArticle === articles.length) {
      this.setState({ currentArticle: 1 });
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle + 1,
        };
      });
    }
  }
  handleSwipeRight = () => {
    const { currentArticle } = this.state;

    if ( currentArticle === 1) {
      this.setState({ currentArticle: articles.length });
    } else {
      this.setState(function (state) {
        return {
          currentArticle: state.currentArticle - 1,
        };
      });
    }
  }

  render() {
    const { currentArticle, articleArray } = this.state;
    const article = articles[currentArticle - 1];

    return (
      <div className='slider-wrapper'>
        <div className='main-article-container'>
          <Swipe
            onSwipedLeft={this.handleSwipeLeft}
            onSwipedRight={this.handleSwipeRight}
          >
            <img src={article.img} alt='main article' />
          </Swipe>
          <div className='news-info'>
            <p className='publish-time'>Published / 20.09.2019</p>
            <p className='title'>{article.title}</p>
            <p className='news-text'>{article.text}</p>
            <button type='reset' className='more-button'>More</button>
          </div>
          <div className='slider-controller'>
            <button
              type='reset' className='slider-back'
              onClick={this.handlePrevSlide}
            />
            {articleArray.map(element =>(
              <button
                type='reset' className={currentArticle === element ? 'current-slide': ''}
                onClick={() =>this.handleClick(element)}
                key={element.id}
              >
                { element > 9 ? element : `0${element}`}
              </button>
            ))}
            <button
              type='reset' className='slider-next'
              onClick={this.handleNextSlide}
            />
          </div>
        </div>
        <div className='sub-articles-container'>
          {articleArray.map(element =>(
            <div className='sub-article' key={element.id} >
              <img src={articles[element - 1].img} alt='sub article' />
              <p className='sub-article-title'> Lorem ipsum </p>
              <p className='sub-article-text'>{articles[element - 1].title}  </p>
              <img
                src={hoverArrow}
                alt='hover arrow'
                className='hover-arrow'
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
