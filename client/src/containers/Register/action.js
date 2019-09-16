import {
  userConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';

export const register = user => (
  dispatch => {
    dispatch(registrationRequest(user));
    instance.post('/register', user)
      .then(
        () => {
          dispatch(registrationSuccess(user));
          history.push('/login');
        }
      ).catch(error => {
        dispatch(registrationFailure(error.response.data && error.response.data.message));
      });
  }
);

const registrationRequest = user => ({
  type: userConstants.REGISTER_REQUEST,
  user,
});

const registrationSuccess = user => ({
  type: userConstants.REGISTER_SUCCESS,
  user,
});

const registrationFailure = error => ({
  type: userConstants.REGISTER_FAILURE,
  error,
});
