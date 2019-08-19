import { userConstants } from '../_constants';
import { alertActions } from './';
import { history } from '../_helpers';
import  {instance}   from '../axios.instanse';

export const userActions = {
    register
};

function register(user) {
    return dispatch => {
        dispatch(registrationRequest(user));
        instance.post('/register', user)
            .then(
                user => {
                    dispatch(registrationSuccess());
                    //history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                    setTimeout(()=>{
                        dispatch(alertActions.clear());
                    },3000);
                }
            ).catch( error => {
            dispatch(registrationFailure(error.message));
            dispatch(alertActions.error(error.message));
            setTimeout(()=>{
                dispatch(alertActions.clear());
            },3000);

        });
    };

    function registrationRequest(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function registrationSuccess(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function registrationFailure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
