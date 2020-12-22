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
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_FIREBASE_AUTH: {
      return actionCreators.subscribeFireBaseAuth(state);
    }
    case SUBSCRIBE_SUCCESS: {
      return actionCreators.subscribeSuccess(state);
    }
    case SUBSCRIBE_FAIL: {
      return actionCreators.subscribeFail(state, action);
    }
    case SIGN_IN: {
      return actionCreators.signIn(state);
    }
    case SIGN_IN_SUCCESS: {
      return actionCreators.signInSuccess(state);
    }
    case SIGN_IN_FAIL: {
      return actionCreators.signInFail(state, action);
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
  subscribeFireBaseAuth: (state) => {
    return {
      ...state,
      loading: true,
      connected: false,
    };
  },
  subscribeSuccess: (state) => {
    return {
      ...state,
      loading: false,
      connected: true,
    };
  },
  subscribeFail: (state, action) => {
    return {
      ...state,
      loading: false,
      connected: false,
      errorCode: action.error,
    };
  },
  signIn: (state) => {
    return {
      ...state,
      isLoggedIn: false,
      loading: true,
    };
  },
  signInSuccess: (state) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: true,
    };
  },
  signInFail: (state, action) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: false,
      errorCode: action.error,
    };
  },
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
    yield call(AuthService.subscriber);
    yield put({type: SUBSCRIBE_SUCCESS});
  } catch (error) {
    yield put({type: SUBSCRIBE_FAIL, error: error});
  }
}

export function* attemptSignIn(action) {
  try {
    const user = yield call(AuthService.signIn, action.phoneNumber);

    if (user) {
      yield put({type: SIGN_IN_SUCCESS, user});
    }

    if (!user) {
      yield put({type: SIGN_IN_FAIL, error: 'internal/no_user'});
    }
  } catch ({code}) {
    yield put({type: SIGN_IN_FAIL, error: code});
  }
}

export function* authSaga() {
  yield takeLatest(SUBSCRIBE_FIREBASE_AUTH, attemptSubscribe);
  yield takeLatest(SIGN_IN, attemptSignIn);
}
