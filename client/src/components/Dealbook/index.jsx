import React from 'react';
import { NewsBlock } from '../NewsBlock';
import './style.scss';

export const Dealbook = ({ newsBlock }) => (

  <div className='dealbook-wrapper'>
    <NewsBlock
      newsBlock={newsBlock}
    />

  </div>
);
