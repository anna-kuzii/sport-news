import {
  userConstants,
} from './constants';

export const initialState = {
  resetPassword: false,
  error: null,
};

export function resetPassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: true,
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        resetPassword: false,
      };
    default :
      return state;
  }
}
