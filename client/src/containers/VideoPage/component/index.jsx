import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './style.scss';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from '../../../components/Header';
import { Menu } from '../../../components/Menu';
import { MostPopularComments } from '../../../components/MostPopularComments';
import MostPopular from '../../../assets/data/MostPopularNewsList';
import MostComments from '../../../assets/data/MostCommentsNewsList';
import { VideoPageComponent } from '../../../components/VideoPage';
import menuData from '../../../assets/data/menuItems.json';
import { fetchVideoData } from '../action';
import { connect } from 'react-redux';

class VideoPage extends Component {
  componentDidMount() {
    const { fetchVideoData } = this.props;

    fetchVideoData();
  }

  render() {
    const { videoData } = this.props;

    console.log(videoData);
    return (
      <Route path='/videopage'>
        <Switch>
          <Header />
        </Switch>
        <Switch>
          <Menu menuList={menuData.menu} />
        </Switch>
        {videoData.length === 0
          ?(
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
            <Route
              path='/videopage'
              render={() => <VideoPageComponent data={videoData} />}
            />
          )
        }
        <Switch>
          <div className='most-wrapper'>
            <div className='most-news-container'>
              <MostPopularComments
                blockTitle='most popular'
                newsBlock={MostPopular}
              />
              <MostPopularComments
                blockTitle='most comments'
                newsBlock={MostComments}
              />
            </div>
          </div>
        </Switch>
      </Route>
    );
  }
};

const mapStateToProps = state => (
  {
    videoData: state.videoReducer.videoData,
    loading: state.videoReducer.loading,
    error: state.videoReducer.error,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchVideoData: () => {
      dispatch(fetchVideoData());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
