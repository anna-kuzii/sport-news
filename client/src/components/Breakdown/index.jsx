import React from 'react';
import { NewsBlock } from '../NewsBlock';
import { SingleNews } from '../SingleNews';
import './style.scss';

export const Breakdown = ({ singleNews, newsBlock }) => (
  <div className='breakdown-wrapper'>
    <div className='news-divider'>
      <p>breakdown</p>
    </div>
    <div className='news-container'>
      <div className='news-boxes'>
        <SingleNews singleNews={singleNews} />
        <div className='news-box'>
          <NewsBlock
            newsBlock={newsBlock}
          />
        </div>
      </div>
      <div className='news-boxes'>
        <SingleNews singleNews={singleNews} />
        <div className='news-box'>
          <NewsBlock
            newsBlock={newsBlock}
          />
        </div>
      </div>
    </div>
  </div>
);
