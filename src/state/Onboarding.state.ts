/**
 * @name Onboarding state
 * @description Sets out the actions, reducer and saga of the onboarding state
 */

import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {getData, clearAll, storeData} from '../services/AsyncStorage';
import {LOGIN_SUCCESS, SIGN_OUT} from './Auth.state';

/**
 * Async key
 */
export const asyncStoreKey = 'onboardingStatus';
export const ONBOARDING_STATUS = {
  complete: 'complete',
  incomplete: 'incomplete',
};

/**
 * Actions
 */
export const SET_ONBOARDING_STATUS = 'SET_ONBOARDING_SUCCESS';
export const SET_ONBOARDING_ERROR = 'SET_ONBOARDING_ERROR';
export const RESET_ONBOARDING_STATUS = 'RESET_ONBOARDING_STATUS';
export const SKIP_ONBOARDING = 'SKIP_ONBOARDING';

/**
 * Reducer
 */
type onboardingState = {
  loading: boolean;
  error: null | string;
  onboardingStatus: string | null | 'complete' | 'incomplete';
};

type Action = {
  type: string;
  onboardingStatus?: string | 'complete' | 'incomplete';
  error?: string;
};

const initialState: onboardingState = {
  loading: true,
  error: null,
  onboardingStatus: null,
};

export const onboarding = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ONBOARDING_STATUS: {
      return actionCreators.updateOnboardingStatus(state, action);
    }
    case SET_ONBOARDING_ERROR: {
      return actionCreators.handleOnboardingError(state, action);
    }
    case RESET_ONBOARDING_STATUS: {
      return actionCreators.resetOnboardingStatus(state);
    }
    default:
      return state;
  }
};

/**
 * ActionCreators
 */
export const actionCreators = {
  updateOnboardingStatus: (state: onboardingState, action: Action) => {
    return {
      ...state,
      loading: false,
      onboardingStatus: action.onboardingStatus,
    };
  },
  handleOnboardingError: (state: onboardingState, action: Action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },
  resetOnboardingStatus: (state: onboardingState) => {
    return {
      ...state,
      loading: false,
      onboardingStatus: 'incomplete',
    };
  },
};

/**
 * Dispatch
 */
export const updateOnboardingStatus = (onboardingStatus: string) => ({
  type: SET_ONBOARDING_STATUS,
  onboardingStatus,
});

export const handleOnboardingError = (error: string) => ({
  type: SET_ONBOARDING_ERROR,
  error,
});

export const resetOnboardingStatus = () => ({
  type: RESET_ONBOARDING_STATUS,
});

export const skipOnboarding = () => ({
  type: SKIP_ONBOARDING,
});

/**
 * Sagas
 */
export function* getOnboarding() {
  try {
    const onboardingStatus = yield call(getData, asyncStoreKey);

    if (onboardingStatus === null) {
      yield put(updateOnboardingStatus(ONBOARDING_STATUS.incomplete));
    }

    if (onboardingStatus !== null) {
      yield put(updateOnboardingStatus(onboardingStatus));
    }
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* resetOnboarding() {
  try {
    yield call(clearAll);
    yield put(resetOnboardingStatus());
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* updateOnboarding() {
  try {
    yield call(storeData, asyncStoreKey, ONBOARDING_STATUS.complete);
    yield put(updateOnboardingStatus(ONBOARDING_STATUS.complete));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* onboardingSaga() {
  yield fork(getOnboarding);
  yield takeEvery(SIGN_OUT, resetOnboarding);
  yield takeEvery(LOGIN_SUCCESS, updateOnboarding);
  yield takeEvery(SKIP_ONBOARDING, updateOnboarding);
}
