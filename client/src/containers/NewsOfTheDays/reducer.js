import {
  dayNewsConstants,
} from './constant';


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export function productReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case dayNewsConstants.FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case dayNewsConstants.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case dayNewsConstants.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
