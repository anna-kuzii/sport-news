import {
  videoConstants,
} from './constant';


const initialState = {
  videoData: [],
  loading: false,
  error: null,
};

export function videoReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case videoConstants.FETCH_VIDEO_PENDING:
      return {
        ...state,
        loading: true,
      };

    case videoConstants.FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videoData: action.payload.data,
      };

    case videoConstants.FETCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
