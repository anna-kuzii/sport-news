import {
    userConstants,
} from '../_constants'

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    error:null,
};

export function login(state = initialState, action) {
    switch (action.type) {
        case userConstants.SET_CURRENT_USER:
            return {
                ...state,
                error: null,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case userConstants.USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case userConstants.GET_ERRORS:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}