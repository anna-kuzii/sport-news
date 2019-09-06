import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {
  instance,
} from '../../../axios.instanse';

class NewsOfTheDays extends Component {
  constructor() {
    super();
    this.state ={
      data: [],
      isLoaded: false,
    };
  }

  //Create pass/link to news page to use this function
  /*const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );*/

  componentWillMount() {
    instance.get('/passData').then(article =>{
      this.setState({ data: article, isLoaded: true });
    });
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    const { isLoaded, data } = this.state;

    return (
      <div className='newsoftheday-wrapper'>
        <div className='news-divider'>
          <p>photo of the day</p>
        </div>
        <div className='newsday-block'>
          <img src={isLoaded && data.data[1].imageURL} alt='background' />
          <div className='photo-triangle'>
            <p>photo<span><br />of the<br /></span>day</p>
          </div>
          <div className='news-article'>
            <h1 className='title'>{isLoaded && data.data[1].title}</h1>
            <p className='news-text'>{isLoaded && this.showSeeMoreButton(data.data[1].text)}</p>
            <div className='photo-courtesy'>{isLoaded && data.data[1].author}</div>
          </div>
        </div>
      </div>
    );
  }
};
export default NewsOfTheDays;
