import {
  constants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import jwtDecode from 'jwt-decode';
import { history } from '../../helpers';
import setAuthToken from '../../utils/AuthToken';
import { updateUserData } from '../Login/action';

export const update = user => (
  dispatch =>{
    instance.post('/updateprofile', user)
      .then(res => {
        const { accessToken } = res.data;

        setAuthToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
        dispatch(updateUserData(jwtDecode(accessToken)));
        history.push('/');
      }).catch(error =>
        dispatch(setNewInfoFailure(error.response.data && error.response.data.message))
      );
  }
);

const setNewInfoFailure = error => ({
  type: constants.UPDATE_PROFILE_ERRORS,
  error,
});
