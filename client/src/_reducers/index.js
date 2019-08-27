import {
  combineReducers,
} from 'redux'

import {
  registration,
} from './registration.reducer'

import {
  forgotPassword,
} from './forgotpassword.reducer'

const rootReducer = combineReducers({
  registration,
  forgotPassword,
})

export default rootReducer
