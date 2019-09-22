import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';


export const forgotPassword = (email) => (
  dispatch =>{
    instance.post('/forgotpassword', email)
      .then(() => {
        dispatch(forgotPasswordSuccess(email));
        history.push('/checkemail');
      }).catch(error => {
        dispatch(forgotPasswordFailure(error.response.data && error.response.data.message));
      });
  }
);

const forgotPasswordSuccess = (data) =>({
  type: userConstants.FORGOT_PASSWORD_SUCCESS,
  email: data.email,
});

const forgotPasswordFailure = (error) =>({
  type: userConstants.FORGOT_PASSWORD_FAILURE,
  error,
});
