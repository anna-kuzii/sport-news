import {
  articleConstants,
} from './constant';

export const initialState = {
  adding: false,
  error: null,
};

export function addArticleReducer(state = initialState, action) {
  switch (action.type) {
    case articleConstants.SET_NEW_ARTICLE_REQUEST:
      return {
        adding: true,
        ...state,
      };
    case articleConstants.SET_NEW_ARTICLE_SUCCESS:
      return {
        ...state,
        adding: false,
      };
    case articleConstants.SET_NEW_ARTICLE_ERRORS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
