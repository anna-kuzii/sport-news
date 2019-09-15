import axios from 'axios';
import { logoutUser } from './containers/Logout/action';

require('dotenv').config();

export const authInterceptor = (store, history) => {
  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
      localStorage.removeToken('accessToken');
      history.push('/login');
    }
    return Promise.reject(error);
  });
};


export var instance = axios.create(
  {
    baseURL: process.env.REACT_APP_SERVER_URL,
  }
);
