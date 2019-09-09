import {
  videoConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';

export const fetchVideoData =() =>(
  dispatch => {
    dispatch(fetchVideoDataBegin());
    instance.get('/video')
      .then(video => {
        dispatch(fetchVideoDataSuccess(video.data));
      })
      .catch(error =>{
        dispatch(fetchVideoDataFailure(error));
      }
      );
  }
);

export const fetchVideoDataBegin = () => ({
  type: videoConstants.FETCH_VIDEO_PENDING,
});

export const fetchVideoDataSuccess = data => ({
  type: videoConstants.FETCH_VIDEO_SUCCESS,
  payload: { data },
});

export const fetchVideoDataFailure = error => ({
  type: videoConstants.FETCH_VIDEO_FAILURE,
  payload: { error },
});
