import setAuthToken from './AuthToken';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from '../containers/Login/action';
import { logoutUser } from '../containers/Logout/action';
import { store } from '../helpers';

export const checkAuthToken = ()=> {
  if (localStorage.accessToken) {
    const token = localStorage.accessToken;

    setAuthToken(token);
    try {
      jwt_decode(token);
    } catch (error) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    }
    const decoded = jwt_decode(token);

    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    }
  }
};
