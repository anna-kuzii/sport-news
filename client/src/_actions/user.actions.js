import {
  userConstants,
} from '../_constants'
import {
  instance,
} from '../axios.instanse'

export const userActions = {
  register,
}

function register(user) {
  return dispatch => {
    dispatch(registrationRequest(user))
    instance.post('/register', user)
      .then(
        () => {
          dispatch(registrationSuccess())
        }
      ).catch(error => {
        dispatch(registrationFailure(error.response.data && error.response.data.message))
      })
  }

  function registrationRequest(user) {
    return {
      type: userConstants.REGISTER_REQUEST,
      user,
    }
  }

  function registrationSuccess(user) {
    return {
      type: userConstants.REGISTER_SUCCESS,
      user,
    }
  }

  function registrationFailure(error) {
    return {
      type: userConstants.REGISTER_FAILURE,
      error,
    }
  }
}
