import React from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';

import './style.scss';

const NewsBlock = ({ newsData }) => {
  const indexArticle = Math.floor(Math.random() * Math.floor(newsData.length - 2));

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
        newsData.slice(indexArticle, indexArticle + 3).map(element => (
          <section className='news-block-section' key={element._id} >
            <div className='news-block' key={element._id}>
              <Link to={`/news/${element._id}`}>
                <img src={element.imageURL} alt='News block' />
                <div key={element._id}>
                  <h4>{element.title}</h4>
                  <p>{element.text}</p>
                </div>
                <Link to={`/news/${element._id}`}>
                  <img
                    src={hoverArrow}
                    alt='hover arrow'
                    className='hover-arrow'
                  />
                </Link>
              </Link>
            </div>
          </section>
        ))
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock);

