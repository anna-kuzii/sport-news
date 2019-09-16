import {
  userConstants,
} from './constant';

export const initialState = {
  registering: false,
  error: null,
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
