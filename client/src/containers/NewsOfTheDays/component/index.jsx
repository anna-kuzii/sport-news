import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


class NewsOfTheDays extends Component {
  state = {
    articles: [],
  }
  //const { image, title, text, photoCourtesy, fullNews } = props;

  /*const showSeeMoreButton = (text, fullNews) => (
    text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to={fullNews} className='see-more'> ...</Link></p>
  );*/
  componentDidMount() {
    console.log('blalba');
  }

  showSeeMoreButton(text) {
    return text.length < 100 ? text
      : <p>{text.slice(0, 60)}<Link to='/' className='see-more'> ...</Link></p>;
  };

  render() {
    return (
      <div className='newsoftheday-wrapper'>
        <div className='news-divider'>
          <p>photo of the day</p>
        </div>
        <div className='newsday-block'>
          <img src='https://res.cloudinary.com/drvcqsqab/image/upload/v1567238049/_108560049_gettyimages-1171162343_i6kkfa.jpg' alt='background' />
          <div className='photo-triangle'>
            <p>photo<span><br />of the<br /></span>day</p>
          </div>
          <div className='news-article'>
            <h1 className='title'>some real cool news</h1>
            <p className='news-text'>{this.showSeeMoreButton('jksdncjksdnjsdkn vsaokmsnadvkhmcznskrnlmzxic')}</p>
            <div className='photo-courtesy'>by me</div>
          </div>
        </div>
      </div>
    );
  }
};
export default NewsOfTheDays;
