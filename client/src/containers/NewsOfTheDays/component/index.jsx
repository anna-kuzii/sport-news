import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './style.scss';
import { fetchNewsDayData } from '../action';
import { connect } from 'react-redux';


class NewsOfTheDays extends Component {
  //TODO :Create pass/link to news page to use this function
  /*const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );*/

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchNewsDayData());
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    const { data } = this.props;

    return (
      data.length === 0
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
              <img src={data[1].imageURL} alt='background' />
              <div className='photo-triangle'>
                <p>photo<span><br />of the<br /></span>day</p>
              </div>
              <div className='news-article'>
                <h1 className='title'>{data[1].title}</h1>
                <p className='news-text'>{this.showSeeMoreButton(data[1].text)}</p>
                <div className='photo-courtesy'>{data[1].author}</div>
              </div>
            </div>
          </div>
        )
    );
  }
};

const mapStateToProps = state => {
  return (
    {
      data: state.productReducer.data,
      loading: state.productReducer.loading,
      error: state.productReducer.error,
    });
};

export default connect(mapStateToProps)(NewsOfTheDays);
