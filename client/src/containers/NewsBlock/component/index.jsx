import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../NewsLogic/action';
import { connect } from 'react-redux';

import './style.scss';

class NewsBlock extends Component {
  render() {
    const { newsData } = this.props;
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
            <section className='news-block-section' key={element.id} >
              <div className='news-block' key={element.id}>
                <img src={element.imageURL} alt='News block' />
                <div key={element.id}>
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
              </div>
            </section>
          ))
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock);

