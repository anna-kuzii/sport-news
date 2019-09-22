import {
  constants,
} from './constant';


const initialState = {
  updatedProfile: false,
  error: null,
};

export function update(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_PROFILE_ERRORS:
      return {
        error: action.error,
        updatedProfile: false,
      };
    default:
      return state;
  }
}
