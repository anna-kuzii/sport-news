import { userConstants } from '../_constants';
import { registerFunc } from '../UserFunctions';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    register
};



function register(user) {
    return dispatch => {
        dispatch(request(user));

        registerFunc(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
