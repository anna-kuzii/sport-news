import axios from 'axios';
import { logoutUser } from './containers/Logout/action';
import { store, history } from './helpers';

require('dotenv').config();

export var instance = axios.create(
  {
    baseURL: process.env.REACT_APP_SERVER_URL,
  }
);

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch(logoutUser());
    localStorage.removeToken('accessToken');
    history.push('/login');
  }
  return Promise.reject(error);
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('accessToken');
  return config;
});
