import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';


export const userActions = {
  subscription,
};

function subscription(email) {
  return dispatch => {
    instance.post('/subscription', email)
      .then(() => {
        dispatch(subscriptionSuccess(email));
      }).catch(error => {
        dispatch(subscriptionFailure(error.response.data && error.response.data.message));
      });
  };

  function subscriptionSuccess(email) {
    return {
      type: userConstants.SUBSCRIPTION_SUCCESS,
      email,
    };
  }

  function subscriptionFailure(error) {
    return {
      type: userConstants.SUBSCRIPTION_FAILURE,
      error,
    };
  }
}

