import React from 'react';
import { NewsBlock } from '../NewsBlock';
import { Layout } from '../Layout';
import './style.scss';
import newsBlock from '../../assets/data/DealbookNewsList';


export const Dealbook = () => (
  <Layout>
    <div className='dealbook-wrapper'>
      <NewsBlock
        newsBlock={newsBlock}
      />
    </div>
  </Layout>
);
