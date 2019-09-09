import { articleConstants } from './constant';


const initialState = {
  articles: [],
  startArray: [],
  loading: true,
  error: null,
};

export function getArticles(state = initialState, action) {
  switch (action.type) {
    case articleConstants.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        articles: action.articles,
        startArray: action.startArray,
      };
    case articleConstants.GET_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    default:
      return state;
  }
}
