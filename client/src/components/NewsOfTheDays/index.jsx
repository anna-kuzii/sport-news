import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './style.scss';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';


class NewsOfTheDays extends Component {
  showSeeMoreButton = (text, NewsArticle) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={NewsArticle} className='see-more'> ...</Link></p>
  );


  render() {
    const { newsData } = this.props;
    const indexArticle = Math.floor(Math.random() * Math.floor(newsData.length));

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
                <h1 className='title'>{newsData[indexArticle].alt}</h1>
                <p className='news-text'>{this.showSeeMoreButton(newsData[indexArticle].text, `/news/${newsData[indexArticle]._id}`)}</p>
                <div className='photo-courtesy'>{newsData[indexArticle].author}</div>
              </div>
            </div>
          </div>
        )
    );
  }
}

const mapStateToProps = ({ productReducer: { newsData, loading, error } }) => (
  {
    newsData,
    loading,
    error,
  }
);

const mapDispatchToProps = () => (
  {
    fetchNewsData,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsOfTheDays);
