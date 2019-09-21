import React, { Component } from 'react';
import './style.scss';
import { Layout } from '../Layout';
import { fetchNewsData } from '../../containers/NewsLogic/action';
import { connect } from 'react-redux';
import { NotFound } from '../NotFound';
import ScrollToTop from '../ScrollToTop';


class NewsArticle extends Component {
  componentDidMount() {
    const { fetchNewsData } = this.props;

    fetchNewsData();
  }
  
  shortText(text) {
    return text.length < 100 ? text
      : <h2>{text.slice(0, 80)}...</h2>;
  };

  shortTopText(text) {
    return text.length < 70 ? text
      : <h2>{text.slice(0, 60)}...</h2>;
  };

  render() {
    const { newsData, match } = this.props;

    const { id } = match.params;
    const art = newsData.find(art => id === art._id);
    
    return (
      !art ? ( <NotFound /> ) : (    
        <Layout>
          <ScrollToTop />
          <section className='single-news-container'>
            <div className='news-wrapper'>
              <div className='top-info'>
                <h4>
                  <span className='team-name'>{art.league} &nbsp;</span>
                  <p className='team-paragraph'>
                    &gt; &nbsp; {this.shortTopText(art.text)}
                  </p>
                </h4>
              </div>
              <div className='article-brochure'>
                <div className='image-container'>
                  <img src={art.imageURL} alt='team information' />
                </div>
                <div className='card-container'>
                  <h4>Published / {art.date.slice(0, 10)}</h4>
                  <h3>{art.title}</h3>
                  <h2>
                    {this.shortText(art.text)}
                  </h2>
                </div>
              </div>
              <div className='information-about-current-news'>
                {art.text}
              </div>
            </div>
          </section>
        </Layout>
      )
    );
  }
}

const mapStateToProps = ({ productReducer: { newsData, loading, error } }) => ({
  newsData,
  loading,
  error,
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
