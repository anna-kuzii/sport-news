import React from 'react';
import NewsBlock from '../../containers/NewsBlock/component';
import { Layout } from '../Layout';
import './style.scss';


export const Dealbook = () => (
  <Layout>
    <div className='dealbook-wrapper'>
      <NewsBlock />
    </div>
  </Layout>
);
