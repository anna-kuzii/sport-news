import { alertConstants, nextAlertConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: nextAlertConstants.SUCCESS,
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: nextAlertConstants.ERROR,
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}