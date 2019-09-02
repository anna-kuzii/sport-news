import {
  userConstants,
} from './constants';

export const initialState = {
  forgotPassword: false,
  error: null,
};


export function forgotPassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
        forgotPassword: true,
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
