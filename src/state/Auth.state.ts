/**
 * @name Auth state
 * @description Sets out the actions, reducder and saga of authenticating a user
 */

import {call, put, takeLatest} from 'redux-saga/effects';

import AuthService from '../services/Auth';

/**
 * Actions
 */
export const SUBSCRIBE_FIREBASE_AUTH = 'SUBSCRIBE_FIREBASE_AUTH';
export const SUBSCRIBE_SUCCESSFUL = 'SUBSCRIBE_SUCCESSFUL';
export const SUBSCRIBE_FAIL = 'SUBSCRIBE_FAIL';

/**
 * Reducer
 */
const initialState = {
  initialising: false,
  loading: true,
  errorCode: null,
  isLoggedIn: false,
  user: null,
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_FIREBASE_AUTH: {
      return {
        ...initialState,
        loading: true,
        initialising: true,
      };
    }
    case SUBSCRIBE_SUCCESSFUL: {
      return {
        ...initialState,
        loading: false,
        initialising: false,
        user: action.user,
      };
    }
    case SUBSCRIBE_FAIL: {
      return {
        ...initialState,
        loading: false,
        initialising: true,
        user: action.error,
      };
    }
    default:
      return state;
  }
};

/**
 * Dispatch
 */
export const subscribeFireBaseAuth = () => ({
  type: SUBSCRIBE_FIREBASE_AUTH,
});

/**
 * Sagas
 */
export function* attemptSubscribe() {
  try {
    yield call(AuthService.subscriber());
    yield put({type: SUBSCRIBE_SUCCESSFUL});
  } catch (error) {
    yield put({type: SUBSCRIBE_FAIL, error: error});
  }
}

export function* authSaga() {
  yield takeLatest(SUBSCRIBE_FIREBASE_AUTH, attemptSubscribe);
}
