import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './style.scss';
import { fetchNewsData } from '../../NewsLogic/action';
import { connect } from 'react-redux';


class NewsOfTheDays extends Component {
  //TODO :Create pass/link to news page to use this function
  /*const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );*/

  componentDidMount() {
    const { fetchNewsData } = this.props;

    fetchNewsData();
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    const { newsData } = this.props;
    const indexArticle = Math.round(Math.random() * 10);

    return (
      !newsData.length
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
          <div className='newsoftheday-wrapper'>
            <div className='news-divider'>
              <p>photo of the day</p>
            </div>
            <div className='newsday-block'>
              <img src={newsData[indexArticle].imageURL} alt='background' />
              <div className='photo-triangle'>
                <p>photo<span><br />of the<br /></span>day</p>
              </div>
              <div className='news-article'>
                <h1 className='title'>{newsData[indexArticle].title}</h1>
                <p className='news-text'>{this.showSeeMoreButton(newsData[indexArticle].text)}</p>
                <div className='photo-courtesy'>{newsData[indexArticle].author}</div>
              </div>
            </div>
          </div>
        )
    );
  }
}

const mapStateToProps = state => (
  {
    newsData: state.productReducer.newsData,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchNewsData: () => {
      dispatch(fetchNewsData());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsOfTheDays);
