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
    const { fetchNewsDayData } = this.props;

    fetchNewsDayData();
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    const { dayNewsData } = this.props;

    return (
      !dayNewsData.length
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
              <img src={dayNewsData[1].imageURL} alt='background' />
              <div className='photo-triangle'>
                <p>photo<span><br />of the<br /></span>day</p>
              </div>
              <div className='news-article'>
                <h1 className='title'>{dayNewsData[1].title}</h1>
                <p className='news-text'>{this.showSeeMoreButton(dayNewsData[1].text)}</p>
                <div className='photo-courtesy'>{dayNewsData[1].author}</div>
              </div>
            </div>
          </div>
        )
    );
  }
};

const mapStateToProps = state => (
  {
    dayNewsData: state.productReducer.dayNewsData,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchNewsDayData: () => {
      dispatch(fetchNewsDayData());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsOfTheDays);
