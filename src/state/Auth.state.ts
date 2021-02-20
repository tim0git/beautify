/**
 * @name Auth state
 * @description Sets out the actions, reducer and saga of authenticating a user
 */

import {call, fork, put, take, takeEvery} from 'redux-saga/effects';
import {getUserIDToken} from './Firebase.helpers';
import rsf from './Redux/Redux-Saga-Firebase';

/**
 * Actions
 */
export const SYNC_USER = 'SYNC_USER';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REQUEST_CODE = 'REQUEST_CODE';
export const SUBMIT_CODE = 'SUBMIT_CODE';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

/**
 * Reducer
 */
const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  authToken: null,
  user: null,
};

export const authentication = (state = initialState, action: any) => {
  switch (action.type) {
    case SYNC_USER: {
      return actionCreators.syncUser(state, action);
    }
    case LOGIN: {
      return actionCreators.login(state);
    }
    case LOGIN_SUCCESS: {
      return actionCreators.loginInSuccess(state);
    }
    case LOGIN_FAIL: {
      return actionCreators.loginInFail(state, action);
    }
    case SIGN_OUT: {
      return actionCreators.signOut(state);
    }
    case SIGN_OUT_FAIL: {
      return actionCreators.signOutFail(state, action);
    }
    case SIGN_OUT_SUCCESS: {
      return actionCreators.signOutSuccess();
    }
    default:
      return actionCreators.default(state);
  }
};

/**
 * ActionCreators
 */
export const actionCreators = {
  default: (state: any) => {
    return state;
  },
  syncUser: (state: any, action: {user: {user: any}; authToken: any}) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: !!action.user.user,
      user: action.user,
      authToken: action.authToken,
    };
  },
  login: (state: any) => {
    return {
      ...state,
      isLoggedIn: false,
      loading: true,
    };
  },
  loginInSuccess: (state: any) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: true,
    };
  },
  loginInFail: (state: any, action: {error: any}) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: false,
      error: action.error,
    };
  },
  signOut: (state: any) => {
    return {
      ...state,
      loading: true,
    };
  },
  signOutSuccess: () => {
    return initialState;
  },
  signOutFail: (state: any, action: {error: any}) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },
};

/**
 * Dispatch
 */
export const syncUser = (user: string | null, authToken: string | null) => ({
  type: SYNC_USER,
  user,
  authToken,
});

export const login = (phoneNumber: string) => ({
  type: LOGIN,
  phoneNumber,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAIL,
  error,
});

export const submitCode = (verificationCode: string) => ({
  type: SUBMIT_CODE,
  verificationCode,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: any) => ({
  type: SIGN_OUT_FAIL,
  error,
});

/**
 * Sagas
 */
export function* syncUserSaga() {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const user = yield take(channel);

    const authToken = yield call(getUserIDToken, user);

    if (user) {
      yield put(syncUser(user, authToken));
    } else {
      yield put(syncUser(null, null));
    }
  }
}

export function* loginSaga(action: {phoneNumber: string}) {
  try {
    const confirmationResult = yield call(rsf.auth.signInWithPhoneNumber, action.phoneNumber, null);

    yield put({type: REQUEST_CODE});

    const {verificationCode} = yield take(SUBMIT_CODE);

    yield call([confirmationResult, confirmationResult.confirm], verificationCode);

    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(error.code));
  }
}

export function* signOutSaga() {
  try {
    yield call(rsf.auth.signOut);

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.code));
  }
}

export function* authSaga() {
  yield fork(syncUserSaga);
  // @ts-ignore
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(SIGN_OUT, signOutSaga);
}
