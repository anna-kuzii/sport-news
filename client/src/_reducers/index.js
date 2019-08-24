import {
  combineReducers,
} from 'redux'

import {
  registration,
} from './registration.reducer'

import {
  login,
} from './login.reducer'

const rootReducer = combineReducers({
  registration,
  login,
});

export default rootReducer
