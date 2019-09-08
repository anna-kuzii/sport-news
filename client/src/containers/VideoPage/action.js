import {
  videoConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';

export const fetchVideoData =() =>(
  dispatch => {
    dispatch(fetchDataBegin());
    instance.get('/video')
      .then(video => {
        dispatch(fetchDataSuccess(video.data));
      })
      .catch(error =>{
        dispatch(fetchDataFailure(error));
      }
      );
  }
);

export const fetchDataBegin = () => ({
  type: videoConstants.FETCH_VIDEO_PENDING,
});

export const fetchDataSuccess = data => ({
  type: videoConstants.FETCH_VIDEO_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = error => ({
  type: videoConstants.FETCH_VIDEO_FAILURE,
  payload: { error },
});
