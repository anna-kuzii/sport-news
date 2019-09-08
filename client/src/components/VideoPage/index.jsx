import React from 'react';
import './style.scss';

export const VideoPageComponent =(props)=>{
  const { data } = props;

  return (
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
          title={data[0].title}
          src={data[0].videoURL}
        />
        <div className='main-title' >{data[0].title}</div>
      </div>
      <div className='additional-video-wrapper'>
        <div className='left-column-video'>
          <div className='single-video'>
            <iframe
              title={data[1].title}
              src={data[1].videoURL}
            />
            <h1>{data[1].title}</h1>
          </div>
          <div className='single-video'>
            <iframe
              title={data[2].title}
              src={data[2].videoURL}
            />
            <h1>{data[2].title}</h1>
          </div>
        </div>
        <div className='right-column-video'>
          <div className='single-video'>
            <iframe
              title={data[3].title}
              src={data[3].videoURL}
            />
            <h1>{data[3].title}</h1>
          </div>
          <div className='single-video'>
            <iframe
              title={data[4].title}
              src={data[4].videoURL}
            />
            <h1>{data[4].title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
