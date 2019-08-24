import {
    userConstants,
} from '../_constants'
import {
    instance,
} from '../axios.instanse'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

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
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken( token );
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            }).catch(err =>
            dispatch({
                type: userConstants.GET_ERRORS,
                error: err.response.data && err.response.data.message,
            })
        );
    };
}

export const setCurrentUser = decoded => {
    return {
        type: userConstants.SET_CURRENT_USER,
        payload: decoded,
    };
};
export const setUserLoading = () => {
    return {
        type: userConstants.USER_LOADING,
    };
};
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};