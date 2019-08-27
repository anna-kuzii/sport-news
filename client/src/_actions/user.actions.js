import {
    userConstants,
} from '../_constants'
import {
    instance,
} from '../axios.instanse'

export const userActions = {
    register,
    forgotPassword,
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

function forgotPassword(email) {
    return dispatch => {
        instance.post('/forgotpassword', email)
            .then(() => {
                dispatch(forgotPasswordSuccess(email))
            }).catch(error => {
            dispatch(forgotPasswordFailure(error.response.data && error.response.data.message))
        })
    }

    function forgotPasswordSuccess(email) {
        return {
            type: userConstants.FORGOT_PASSWORD_SUCCESS,
            email,
        }
    }

    function forgotPasswordFailure(error) {
        return {
            type: userConstants.FORGOT_PASSWORD_FAILURE,
            error,
        }
    }
}
