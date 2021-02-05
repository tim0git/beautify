/**
 * @name Onboarding state
 * @description Sets out the actions, reducer and saga of the onboarding state
 */

import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {getOnboardingStatus, storeData} from '../services/AsyncStorage';
import {LOGIN_SUCCESS, SIGN_OUT} from './Auth.state';

/**
 * Actions
 */
export const SET_ONBOARDING = 'SET_ONBOARDING';
export const SET_ONBOARDING_SUCCESS = 'SET_ONBOARDING_SUCCESS';
export const SET_ONBOARDING_ERROR = 'SET_ONBOARDING_ERROR';

/**
 * Reducer
 */
type onboardingState = {
  onboardingStatus: string | null | 'complete' | 'incomplete';
  error: null | string;
};

type actionType = {
  type: string;
  onboardingStatus: string | 'complete' | 'incomplete';
};

const initialState: onboardingState = {
  onboardingStatus: null,
  error: null,
};

export const onboarding = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_ONBOARDING_SUCCESS: {
      return actionCreators.updateOnboardingStatus(state, action);
    }
    case SET_ONBOARDING_ERROR: {
      return;
    }
    default:
      return actionCreators.default(state);
  }
};

/**
 * ActionCreators
 */
export const actionCreators = {
  updateOnboardingStatus: (state: onboardingState, action: actionType) => {
    return {
      ...state,
      onboardingStatus: action.onboardingStatus,
    };
  },
  handleOnboardingError: (state: onboardingState, error: string) => {
    return {
      ...state,
      error,
    };
  },
  default: (state: onboardingState) => {
    return state;
  },
};

/**
 * Dispatch
 */
export const updateOnboardingStatus = (onboardingStatus: string) => ({
  type: SET_ONBOARDING_SUCCESS,
  onboardingStatus,
});
export const handleOnboardingError = (error: string) => ({
  type: SET_ONBOARDING_ERROR,
  error,
});

/**
 * Sagas
 */
export function* getOnboarding() {
  try {
    const onboardingStatus = yield call(getOnboardingStatus, 'onboardingStatus');
    yield put(updateOnboardingStatus(onboardingStatus));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* setOnboardingComplete() {
  try {
    yield call(storeData, 'onboardingStatus', 'complete');

    yield put(updateOnboardingStatus('complete'));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* setOnboardingIncomplete() {
  try {
    yield call(storeData, 'onboardingStatus', 'incomplete');

    yield put(updateOnboardingStatus('incomplete'));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* onboardingSaga() {
  yield fork(getOnboarding);
  yield takeEvery(SIGN_OUT, setOnboardingIncomplete);
  yield takeEvery(LOGIN_SUCCESS, setOnboardingComplete);
}
