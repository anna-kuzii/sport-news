import {
  userConstants,
} from './constants';

export const initialState = {
  forgotPassword: false,
  error: null,
  email: null,
};


export function forgotPassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: true,
        email: action.email,
      };
    case userConstants.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        forgotPassword: false,
      };
    default :
      return state;
  }
}
