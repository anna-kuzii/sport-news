import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../NewsLogic/action';
import { connect } from 'react-redux';

import './style.scss';

class SingleNews extends Component {
  render() {
    const { newsData } = this.props;
    const indexArticle = Math.floor(Math.random() * Math.floor(10));

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
            <div className='single-news-logo'>
              <h2>{newsData[indexArticle].league}</h2>
            </div>
            <img src={newsData[indexArticle].imageURL} alt='Single news' />
            <div>
              <h4>{newsData[indexArticle].title}</h4>
            </div>
            <Link to='/'>
              <img
                src={hoverArrow}
                alt='hover arrow'
                className='hover-arrow'
              />
            </Link>
          </div>
        )
    );
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleNews);
