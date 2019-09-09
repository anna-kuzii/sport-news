import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './style.scss';
import { fetchVideoData } from '../action';
import { connect } from 'react-redux';

class VideoPage extends Component {
  componentDidMount() {
    this.props.fetchVideoData();
  }

  render() {
    const { videoData } = this.props;

    return (
      videoData.length === 0
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
          <div className='video-page-wrapper'>
            <div className='news-word-wrap'>
                  NEWS
            </div>
            <div className='video-word-wrap'>
                  VIDEO
            </div>
            <div className='section-name'>
              <p><span>video</span> &gt; the NBA videos</p>
            </div>
            <div className='main-video-wrapper'>
              <iframe
                className='main-video'
                title={videoData[0].title}
                src={videoData[0].videoURL}
              />
              <div className='main-title' >{videoData[0].title}</div>
            </div>
            <div className='additional-video-wrapper'>
              <div className='left-column-video'>
                <div className='single-video'>
                  <iframe
                    title={videoData[1].title}
                    src={videoData[1].videoURL}
                  />
                  <h1>{videoData[1].title}</h1>
                </div>
                <div className='single-video'>
                  <iframe
                    title={videoData[2].title}
                    src={videoData[2].videoURL}
                  />
                  <h1>{videoData[2].title}</h1>
                </div>
              </div>
              <div className='right-column-video'>
                <div className='single-video'>
                  <iframe
                    title={videoData[3].title}
                    src={videoData[3].videoURL}
                  />
                  <h1>{videoData[3].title}</h1>
                </div>
                <div className='single-video'>
                  <iframe
                    title={videoData[4].title}
                    src={videoData[4].videoURL}
                  />
                  <h1>{videoData[4].title}</h1>
                </div>
              </div>
            </div>
          </div>
        )
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
