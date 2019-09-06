import {
  dayNewsConstants,
} from './constant';


const initialState = {
  dayNewsdata: [],
  loading: false,
  error: null,
};

export function productReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case dayNewsConstants.FETCH_NEWS_DAY_DATA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case dayNewsConstants.FETCH_NEWS_DAY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dayNewsdata: action.payload.data,
      };

    case dayNewsConstants.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
