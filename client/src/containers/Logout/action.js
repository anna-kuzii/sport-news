import setAuthToken from '../../utils/AuthToken';
import { setCurrentUser } from '../Login/action';

export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('accessToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
