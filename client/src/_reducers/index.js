import { combineReducers } from 'redux';

import { registration } from './registration.reducer';

const rootReducer = combineReducers({
    registration
});

export default rootReducer;