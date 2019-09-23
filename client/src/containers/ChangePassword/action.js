import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';

export const changePassword = (data) => (
  dispatch =>{
    instance.post('/changepassword', data)
      .then(() => {
        dispatch(changePasswordSuccess());
        history.push('/');
      }).catch(error => {
        dispatch(changePasswordFailure(error.response.data && error.response.data.message));
      });
  }
);

const changePasswordSuccess = () =>({
  type: userConstants.CHANGE_PASSWORD_SUCCESS,
});

const changePasswordFailure = (error) =>({
  type: userConstants.CHANGE_PASSWORD_FAILURE,
  error,
});
