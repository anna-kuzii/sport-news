import React, { Component } from 'react';
import './style.scss';
import { Layout } from '../Layout';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class NewsArticle extends Component {
  componentDidMount() {
    const { fetchNewsData } = this.props;

    fetchNewsData();
  }

  shortText(text) {
    return text.length < 100 ? text
      : <h2>{text.slice(0, 80)}...</h2>;
  };

  render() {
    const { newsData } = this.props;
    const indexArticle = Math.round(Math.random() * 10);

    return !newsData.length ? (
      <div className='data-loading'>
        <Loader 
          type='TailSpin' color='#C63638' 
          height='200' width='200' 
        />
      </div>
    ) : (
      <Layout>
        <section className='single-news-container'>
          <div className='news-wrapper'>
            <div className='top-info'>
              <h4>
                <span className='team-name'>NBA </span>{' '}
                <p className='team-paragraph'>
                  {' '}
                  &gt; Tennessee / As M.L.B. &apos; s Season Opens in Japan, at
                  Least the Dirt Is Familiar
                </p>
              </h4>
            </div>
            <div className='article-brochure'>
              <div className='image-container'>
                <img src={newsData[indexArticle].imageURL} alt='team information' />
              </div>
              <div className='card-container'>
                <h4>Published / {newsData[indexArticle].date}</h4>
                <h3>{newsData[indexArticle].title}</h3>
                <h2>
                  {this.shortText(newsData[indexArticle].text)}
                </h2>
              </div>
            </div>
            <div className='information-about-current-news'>
              {newsData[indexArticle].text}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  newsData: state.productReducer.newsData,
  loading: state.productReducer.loading,
  error: state.productReducer.error,
});

const mapDispatchToProps = dispatch => ({
  fetchNewsData: () => {
    dispatch(fetchNewsData());
  },
});

const connectedArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticle);

export { connectedArticlePage as NewsArticle };
