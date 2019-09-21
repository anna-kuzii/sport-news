import React, { Component } from 'react';
import NewsBlock from '../../NewsBlock/component';
import { Layout } from '../../../components/Layout';
import { Link } from 'react-router-dom';
import { fetchNewsData } from '../../NewsLogic/action';
import { connect } from 'react-redux';
import './style.scss';
import Loader from 'react-loader-spinner';


class Dealbook extends Component {
  componentDidMount() {
    const { fetchNewsData } = this.props;

    fetchNewsData();
  }

  render() {
    const { newsData, loading } = this.props;
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
            <div className='dealbook-wrapper'>
              <div className='news-banner'>DEALBOOK</div>
              <div className='main-article-container'>
                <div className='league-title'>{newsData[indexArticle].league}<span> &gt; {newsData[indexArticle].title}</span></div>
                <img src={newsData[indexArticle].imageURL} alt='main article' />
                <div className='news-info'>
                  <p className='publish-time'>Published / 20.09.2019</p>
                  <p className='title'>{newsData[indexArticle].title}</p>
                  <p className='news-text'>{newsData[indexArticle].text}</p>
                  <Link to='/' className='see-more'>More</Link>
                </div>
              </div>
              <NewsBlock />
            </div>
          </Layout>
        )
    );
  }
}

const mapStateToProps = state => (
  {
    newsData: state.productReducer.newsData,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
  }
);

const actionCreators = {
  fetchNewsData,
};

const connectedSliderPage = connect(mapStateToProps, actionCreators)(Dealbook);

export { connectedSliderPage as Dealbook };
