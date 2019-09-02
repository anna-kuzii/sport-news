import {
    userConstants,
} from '../_constants'
import {
    instance,
} from '../axios.instanse'
import jwt_decode from 'jwt-decode'
import {history} from '../_helpers';

export const userActions = {
    register,
    login,
    forgotPassword,
    subscription,
}

function register(user) {
    return dispatch => {
        dispatch(registrationRequest(user))
        instance.post('/register', user)
            .then(
                () => {
                    dispatch(registrationSuccess())
                    history.push('/login');
                }
            ).catch(error => {
            dispatch(registrationFailure(error.response.data && error.response.data.message))
        })
    };

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


function login(user) {
    return dispatch => {
        instance.post('/login', user)
            .then(res => {
                const {accessToken} = res.data;
                localStorage.setItem('accessToken', accessToken);
                dispatch(setCurrentUser(jwt_decode(accessToken)));
            }).catch(error =>
            dispatch(loginFailure(error.response.data && error.response.data.message))
        );
    };

    function loginFailure(error) {
        return {
            type: userConstants.SET_CURRENT_GET_ERRORS,
            error
        }
    }
}

export const setCurrentUser = decoded => {
    return {
        type: userConstants.SET_CURRENT_USER_SUCCESS,
        payload: decoded,
    };
};


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

function subscription(email) {
    return dispatch => {
        instance.post('/subscription', email)
            .then(() => {
                dispatch(subscriptionSuccess(email))
            }).catch(error => {
            dispatch(subscriptionFailure(error.response.data && error.response.data.message))
        })
    }

    function subscriptionSuccess(email) {
        return {
            type: userConstants.SUBSCRIPTION_SUCCESS,
            email,
        }
    }

    function subscriptionFailure(error) {
        return {
            type: userConstants.SUBSCRIPTION_FAILURE,
            error,
        }
    }
}

