import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';


export const resetPassword = (data) => (
  dispatch =>{
    instance.post('/resetpassword', data)
      .then(() => {
        dispatch(resetPasswordSuccess());
        history.push('/login');
      }).catch(error => {
        dispatch(resetPasswordFailure(error.response.data && error.response.data.message));
      });
  }
);

const resetPasswordSuccess = () =>({
  type: userConstants.RESET_PASSWORD_SUCCESS,
});

const resetPasswordFailure = (error) =>({
  type: userConstants.RESET_PASSWORD_FAILURE,
  error,
});
