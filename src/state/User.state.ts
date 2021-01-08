/**
 * @name User state
 * @description Sets out the actions, reducer and saga of the user
 */

import {SYNC_USER, LOGIN_FAIL} from './Auth.state';

/**
 * Reducer
 */
const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL: {
      return actionCreators.clearCurrentUser();
    }
    case SYNC_USER: {
      return actionCreators.syncUser(state);
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
  syncUser: (state) => {
    return {
      ...state,
    };
  },
};
