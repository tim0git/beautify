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
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAIL = 'SUBSCRIBE_FAIL';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

/**
 * Reducer
 */
const initialState = {
  connected: false,
  loading: false,
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
        connected: false,
      };
    }
    case SUBSCRIBE_SUCCESS: {
      return {
        ...initialState,
        loading: false,
        connected: true,
        user: action.user,
      };
    }
    case SUBSCRIBE_FAIL: {
      return {
        ...initialState,
        loading: false,
        connected: false,
        user: action.error,
      };
    }
    case SIGN_IN: {
      return {
        ...initialState,
        isLoggedIn: false,
        loading: true,
      };
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...initialState,
        loading: false,
        isLoggedIn: true,
        user: action.user,
      };
    }
    case SIGN_IN_FAIL: {
      return {
        ...initialState,
        loading: false,
        isLoggedIn: false,
        error: action.error,
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

export const signIn = (phoneNumber) => ({
  type: SIGN_IN,
  phoneNumber,
});

/**
 * Sagas
 */
export function* attemptSubscribe() {
  try {
    yield call(AuthService.subscriber());
    yield put({type: SUBSCRIBE_SUCCESS});
  } catch (error) {
    yield put({type: SUBSCRIBE_FAIL, error: 'ERROR_CONNECT_FIREBASE_AUTH'});
  }
}

export function* attemptSignIn(action) {
  try {
    const user = yield call(AuthService.signIn, action.phoneNumber);
    if (user) yield put({type: SIGN_IN_SUCCESS});
  } catch (error) {
    yield put({type: SIGN_IN_FAIL, error: 'ERROR_SIGN_IN'});
  }
}

export function* authSaga() {
  yield takeLatest(SUBSCRIBE_FIREBASE_AUTH, attemptSubscribe);
  yield takeLatest(SIGN_IN, attemptSignIn);
}
