import React from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';

import './style.scss';

const SingleNews = ({ newsData }) => {
  const indexArticle = Math.floor(Math.random() * Math.floor(newsData.length));

  return (
    !newsData.length
      ? (
        <div className='data-loading'>
          <Loader
            type='TailSpin'
            color='#C63638'
            height='150'
            width='150'
          />
        </div>
      )
      : (
        <div className='single-news'>
          <Link to={`/news/${newsData[indexArticle]._id}`}>
            <div className='single-news-logo'>
              <h2>{newsData[indexArticle].league}</h2>
            </div>
            <img src={newsData[indexArticle].imageURL} alt='Single news' />
            <div>
              <h4>{newsData[indexArticle].title}</h4>
            </div>
            <Link to={`/news/${newsData[indexArticle]._id}`}>
              <img
                src={hoverArrow}
                alt='hover arrow'
                className='hover-arrow'
              />
            </Link>
          </Link>
        </div>
      )
  );
};

const mapStateToProps = ({ productReducer: { newsData, loading, error } }) => (
  {
    newsData,
    loading,
    error,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchNewsData: () => {
      dispatch(fetchNewsData());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SingleNews);
