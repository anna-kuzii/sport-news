import {
  userConstants,
} from './constants';
import {
  instance,
} from '../../axios.instanse';

export const subscription = (email) => (
  dispatch => {
    instance.post('/subscription', email)
      .then(() => {
        dispatch(subscriptionSuccess(email));
      }).catch(error => {
        dispatch(subscriptionFailure(error.response.data && error.response.data.message));
      });
  });

const subscriptionSuccess = (email) => ({
  type: userConstants.SUBSCRIPTION_SUCCESS,
  email,
});


const subscriptionFailure = (error) => ({
  type: userConstants.SUBSCRIPTION_FAILURE,
  error,
});
