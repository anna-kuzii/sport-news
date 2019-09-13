import React from 'react';

import './App.scss';
import { Routes } from './Routes';
import { authInterceptor } from './interceptor';

authInterceptor();

const App = () => (
  <Routes />
);

export default App;
