import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../assets/img/news-hover-arrow.svg';
import { Swipe } from 'react-swipe-component';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.scss';

const MIN_LENGTH = 4;

class NewsSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentArticle: 1,
      articleArray: [],
    };

    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setArticle = this.setArticle.bind(this);
  }

  componentDidMount() {
    const { fetchNewsData } = this.props;

    fetchNewsData();
  }

  componentDidUpdate() {
    const { articleArray } = this.state;

    const initialArticlesArray = this.setArticle();

    if (articleArray.length !== initialArticlesArray.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ articleArray: initialArticlesArray, isLoading: false });
    }
  }

  setArticle() {
    const { articles } = this.props;

    return (articles.length < MIN_LENGTH)
      ? Array.from({ length: articles.length }, (elem, idx) => idx+1)
      : Array.from({ length: MIN_LENGTH }, (elem, idx) => idx + 1);
  }

  handleNextSlide() {
    const { currentArticle, articleArray } = this.state;
    const { articles } = this.props;

    const initialArticlesArray = this.setArticle();

    if ( currentArticle === articles.length) {
      this.setState({ currentArticle: 1, articleArray: initialArticlesArray });
    } else if ( articles.length > MIN_LENGTH && currentArticle === articleArray[3] ) {
      this.setState(state =>{
        const articleArray = state.articleArray.map(element => element + 1);

        return { articleArray, currentArticle: articleArray[3] };
      });
    } else {
      this.setState(state =>( {
        currentArticle: state.currentArticle + 1,
      }));
    }
  }

  handlePrevSlide() {
    const { currentArticle, articleArray } = this.state;
    const { articles } = this.props;
    const articleLength = articles.length;

    const newArticleArray = articles.length < MIN_LENGTH ? articleArray : [ articleLength - 3, articleLength - 2, articleLength - 1, articleLength ];

    if ( currentArticle === 1) {
      this.setState({ currentArticle: articleLength, articleArray: newArticleArray });
    } else if (articles.length > MIN_LENGTH && currentArticle === articleArray[0]) {
      this.setState(state =>{
        const articleArray = state.articleArray.map(element => element - 1);

        return { articleArray, currentArticle: articleArray[0] };
      });
    } else {
      this.setState(state => ({
        currentArticle: state.currentArticle - 1,
      }));
    }
  }

  handleClick(element) {
    this.setState({ currentArticle: element });
  }

  render() {
    const { currentArticle, articleArray } = this.state;
    const { articles, loading } = this.props;
    const article = articles[currentArticle - 1];

    return (
      loading
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
                <button
                  type='reset' className='mobile-slider-back'
                  onClick={this.handlePrevSlide}
                />
                <p className='publish-time'>Published / {article.date.slice(0, 10)}</p>
                <p className='title'>{article.title}</p>
                <p className='news-text'>{article.text}</p>
                <Link to={`/news/${article._id}`} className='more-button'> More</Link>
                <button
                  type='reset' className='mobile-slider-next'
                  onClick={this.handleNextSlide}
                />
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
                  <Link to={`/news/${articles[element - 1]._id}`}>
                    <img src={articles[element - 1].imageURL} alt='sub article' />
                    <p className='sub-article-title'> {articles[element - 1].alt} </p>
                    <p className='sub-article-text'>{articles[element - 1].title}  </p>
                    <img
                      src={hoverArrow}
                      alt='hover arrow'
                      className='hover-arrow'
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )
    );
  }
}

const mapState = ({ productReducer: { loading, updateNewsData: articles } }) =>({
  articles,
  loading,
});

const actionCreators = {
  fetchNewsData,
};

const connectedSliderPage = connect(mapState, actionCreators)(NewsSlider);

export { connectedSliderPage as NewsSlider };
