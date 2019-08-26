import {
    userConstants,
} from '../_constants'
import {
    instance,
} from '../axios.instanse'
import authToken from '../utils/AuthToken'
import jwt_decode from 'jwt-decode'
import { _setAuthData } from '../utils/auth.service'

export const userActions = {
    register,
    login
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
                const { accessToken } = res.data;
                authToken( accessToken );
                _setAuthData(res);
                dispatch(setCurrentUser(jwt_decode(accessToken)));
            }).catch(error =>
            dispatch(loginFailure(error.response.data && error.response.data.message))
        );
    };

    function loginFailure(error) {
        return{
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