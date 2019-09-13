import {
  userConstants,
} from './constants';

export const initialState = {
  isSubscribing: false,
  error: null,
};


export const subscription = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isSubscribing: true,
      };
    case userConstants.SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.error,
        isSubscribing: false,
      };
    default :
      return state;
  };
};
