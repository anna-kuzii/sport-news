import {
  userConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import jwtDecode from 'jwt-decode';
import { history } from '../../helpers';
import setAuthToken from '../../utils/AuthToken';

export const userActions = {
  login,
};

function login(user) {
  return dispatch => {
    instance.post('/login', user)
      .then(res => {
        const { accessToken } = res.data;

        setAuthToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
        dispatch(setCurrentUser(jwtDecode(accessToken)));
        history.push('/');
      }).catch(error =>
        dispatch(loginFailure(error.response.data && error.response.data.message))
      );
  };

  function loginFailure(error) {
    return {
      type: userConstants.SET_CURRENT_GET_ERRORS,
      error,
    };
  }
}

export const setCurrentUser = decoded => {
  return {
    type: userConstants.SET_CURRENT_USER_SUCCESS,
    payload: decoded,
  };
};
