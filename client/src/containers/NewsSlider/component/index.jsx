import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../../assets/img/news-hover-arrow.svg';
import { Swipe } from 'react-swipe-component';
import { getArticles } from '../action';
import { connect } from 'react-redux';

import './style.scss';

class NewsSlider extends Component {
  constructor(props) {
    super(props);

    const { startArray } = this.props;

    this.state = {
      currentArticle: 1,
      articleArray: startArray,
    };

    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getArticles } = this.props;

    getArticles();
  }

  componentDidUpdate(prevProps) {
    const { startArray } = this.props;

    if (prevProps.startArray.length !== startArray.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ articleArray: startArray });
    }
  }

  handleNextSlide() {
    const { currentArticle, articleArray } = this.state;
    const { articles, startArray } = this.props;


    if (!articleArray.length) {
      this.setState({ articleArray: startArray });
    }

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

  handlePrevSlide() {
    const { currentArticle, articleArray } = this.state;
    const { articles, startArray } = this.props;
    const articleLength = articles.length;

    const newArticleArray = articles.length < 4 ? startArray : [ articleLength - 3, articleLength - 2, articleLength - 1, articleLength ];

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

  render() {
    const { currentArticle, articleArray } = this.state;
    const { articles } = this.props;
    const article = articles[currentArticle - 1];

    return (
      articles.length === 0
        ? (
          <div className='data-loading'>
            <Loader
              type='TailSpin'
              color='#C63638'
              height='200'
              width='200'
            />
          </div>
        )
        : (
          <div className='slider-wrapper'>
            <div className='main-article-container'>
              <Swipe
                onSwipedLeft={this.handleNextSlide}
                onSwipedRight={this.handlePrevSlide}
              >
                <img src={article.imageURL} alt='main article' />
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
                {
                  articleArray.map(element =>(
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
                  <img src={articles[element - 1].imageURL} alt='sub article' />
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
        )
    );
  }
}

function mapState(state) {
  return {
    articles: state.getArticles.articles,
    startArray: state.getArticles.initialArticlesArray,
  };
}

const actionCreators = {
  getArticles: getArticles,
};

const connectedSliderPage = connect(mapState, actionCreators)(NewsSlider);

export { connectedSliderPage as NewsSlider };
