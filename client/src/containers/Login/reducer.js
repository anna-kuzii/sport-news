import {
  userConstants,
} from './constant';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: null,
};

export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };
    case userConstants.SET_CURRENT_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userConstants.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userConstants.SET_CURRENT_GET_ERRORS:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
