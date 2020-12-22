/**
 * @name User state
 * @description Sets out the actions, reducer and saga of the user
 */

import {SIGN_IN_SUCCESS, SIGN_IN_FAIL} from './Auth.state';

/**
 * Reducer
 */
const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_FAIL: {
      return actionCreators.clearCurrentUser();
    }
    case SIGN_IN_SUCCESS: {
      return actionCreators.storeUser(state, action);
    }
    default:
      return actionCreators.default(state);
  }
};

/**
 * ActionCreators
 */
export const actionCreators = {
  default: (state) => {
    return state;
  },
  clearCurrentUser: () => {
    return {
      user: null,
    };
  },
  storeUser: (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  },
};
