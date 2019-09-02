import {
  userConstants,
} from './constants';

export const initialState = {
  forgot_password: false,
  error: null,
};


export function forgotPassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
        forgot_password: true,
      };
    case userConstants.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        forgot_password: false,
      };
    default :
      return state;
  }
}
