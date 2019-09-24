import React from 'react';
import NewsBlock from '../NewsBlock';
import { Layout } from '../Layout';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';
import './style.scss';
import Loader from 'react-loader-spinner';
import ScrollToTop from '../ScrollToTop';


const Dealbook = ({ newsData, loading }) => {
  const indexArticle = Math.floor(Math.random() * Math.floor(newsData.length));


  return (
    !newsData.length && loading
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
        <Layout>
          <ScrollToTop />
          <div className='dealbook-wrapper'>
            <div className='dealbook-banner'>DEALBOOK</div>
            <div className='news-banner'>NEWS</div>
            <div className='main-article-container'>
              <div className='league-title'>{newsData[indexArticle].league}<span> &gt; {newsData[indexArticle].title}</span></div>
              <img src={newsData[indexArticle].imageURL} alt='main article' />
              <div className='news-info'>
                <p className='publish-time'>Published / {newsData[indexArticle].date.slice(0, 10)}</p>
                <p className='title'>{newsData[indexArticle].title}</p>
                <p className='news-text'>{newsData[indexArticle].text}</p>
                <Link to={`/news/${newsData[indexArticle]._id}`} className='see-more'>More</Link>
              </div>
            </div>
            <NewsBlock />
          </div>
        </Layout>
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

const actionCreators = {
  fetchNewsData,
};

const connectedSliderPage = connect(mapStateToProps, actionCreators)(Dealbook);

export { connectedSliderPage as Dealbook };
