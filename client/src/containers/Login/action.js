import {
  userConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import jwtDecode from 'jwt-decode';
import { history } from '../../helpers';

export const login = user => (
  dispatch =>{
    instance.post('/login', user)
      .then(res => {
        const { accessToken } = res.data;

        localStorage.setItem('accessToken', accessToken);
        dispatch(setCurrentUser(jwtDecode(accessToken)));
        history.push('/');
      }).catch(error =>
        dispatch(loginFailure(error.response.data && error.response.data.message))
      );
  }
);

const loginFailure = error => ({
  type: userConstants.SET_CURRENT_GET_ERRORS,
  error,
});

const setCurrentUser = decoded => ({
  type: userConstants.SET_CURRENT_USER_SUCCESS,
  payload: decoded,
});
