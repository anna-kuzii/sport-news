import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './style.scss';
import {
  instance,
} from '../../../axios.instanse';

class NewsOfTheDays extends Component {
  constructor() {
    super();
    this.state ={
      data: [],
      isLoading: true,
    };
  }

  //Create pass/link to news page to use this function
  /*const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );*/

  componentDidMount() {
    instance.get('/article').then(article =>{
      this.setState({ data: article, isLoading: false });
    });
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    const { isLoading, data } = this.state;

    return (
      isLoading
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
              <img src={!isLoading ? data.data[1].imageURL : ''} alt='background' />
              <div className='photo-triangle'>
                <p>photo<span><br />of the<br /></span>day</p>
              </div>
              <div className='news-article'>
                <h1 className='title'>{!isLoading && data.data[1].title}</h1>
                <p className='news-text'>{!isLoading && this.showSeeMoreButton(data.data[1].text)}</p>
                <div className='photo-courtesy'>{!isLoading && data.data[1].author}</div>
              </div>
            </div>
          </div>
        )
    );
  }
};
export default NewsOfTheDays;
