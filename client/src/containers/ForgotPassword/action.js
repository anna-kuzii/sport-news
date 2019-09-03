import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';


export const userActions = {
  forgotPassword,
};

function forgotPassword(email) {
  return dispatch => {
    instance.post('/forgotpassword', email)
      .then(() => {
        dispatch(forgotPasswordSuccess(email));
      }).catch(error => {
        dispatch(forgotPasswordFailure(error.response.data && error.response.data.message));
      });
  };

  function forgotPasswordSuccess(email) {
    return {
      type: userConstants.FORGOT_PASSWORD_SUCCESS,
      email,
    };
  }

  function forgotPasswordFailure(error) {
    return {
      type: userConstants.FORGOT_PASSWORD_FAILURE,
      error,
    };
  }
}
