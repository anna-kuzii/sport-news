import {
  newsConstants,
} from './constant';


const initialState = {
  newsData: [],
  updateNewsData: [],
  loading: true,
  error: null,
};

export function productReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case newsConstants.FETCH_NEWS_DATA_PENDING:
      return {
        ...state,
        loading: true,
      };

    case newsConstants.FETCH_NEWS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        newsData: action.payload.data,
        updateNewsData: action.updatePayload.slice([ -7 ]).reverse(),
      };

    case newsConstants.FETCH_NEWS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
