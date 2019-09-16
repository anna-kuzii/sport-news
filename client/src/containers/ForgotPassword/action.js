import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';


export const forgotPassword = (email) => (
  dispatch =>{
    instance.post('/forgotpassword', email)
      .then(() => {
        dispatch(forgotPasswordSuccess(email));
      }).catch(error => {
        dispatch(forgotPasswordFailure(error.response.data && error.response.data.message));
      });
  }
);

const forgotPasswordSuccess = (email) =>({
  type: userConstants.FORGOT_PASSWORD_SUCCESS,
  email,
});

const forgotPasswordFailure = (error) =>({
  type: userConstants.FORGOT_PASSWORD_SUCCESS,
  error,
});
