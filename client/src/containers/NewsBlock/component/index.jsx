import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import hoverArrow from '../../../assets/img/news-hover-arrow.svg';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../NewsLogic/action';
import { connect } from 'react-redux';

import './style.scss';

class NewsBlock extends Component {
  showSeeMore(text) {
    return text.length < 35 ? text
      : <p>{text.slice(0, 30)}<Link to='/' className='see-more'>...</Link></p>;
  };

  render() {
    const { newsData } = this.props;

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
          newsData.slice(0, 3).map(element => (
            <section className='news-block-section' key={element.id} >
              <div className='news-block' key={element.id}>
                <img src={element.imageURL} alt='News block' />
                <div key={element.id}>
                  <h4>{element.title}</h4>
                  <p>{element.text}</p>
                </div>
                <Link to='/'>
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

