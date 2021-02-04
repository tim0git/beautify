/**
 * @name Onboarding state
 * @description Sets out the actions, reducer and saga of the onboarding state
 */

import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {clearAll, getData} from '../services/AsyncStorage';
import {SIGN_OUT} from './Auth.state';

/**
 * Actions
 */
export const SET_ONBOARDING_COMPLETE = 'SET_ONBOARDING_COMPLETE';
export const SET_ONBOARDING_ERROR = 'SET_ONBOARDING_ERROR';
export const RESET_ONBOARDING = 'RESET_ONBOARDING';

/**
 * Reducer
 */
type onboardingState = {
  onboardingComplete: boolean;
  error: null | string;
};

type actionType = {
  type: string;
  onboardingComplete?: boolean;
};

const initialState: onboardingState = {
  onboardingComplete: false,
  error: null,
};

export const onboarding = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_ONBOARDING_COMPLETE: {
      return actionCreators.updateOnboardingComplete(state, action);
    }
    case SET_ONBOARDING_ERROR: {
      return;
    }
    case RESET_ONBOARDING: {
      return actionCreators.resetOnboardingState();
    }
    default:
      return actionCreators.default(state);
  }
};

/**
 * ActionCreators
 */
export const actionCreators = {
  updateOnboardingComplete: (state: onboardingState, action: actionType) => {
    return {
      ...state,
      onboardingComplete: action.onboardingComplete,
    };
  },
  handleOnboardingError: (state: onboardingState, error: string) => {
    return {
      ...state,
      error,
    };
  },
  resetOnboardingState: () => {
    return {
      ...initialState,
    };
  },
  default: (state: onboardingState) => {
    return state;
  },
};

/**
 * Dispatch
 */
export const updateOnboardingComplete = (onboardingComplete: boolean) => ({
  type: SET_ONBOARDING_COMPLETE,
  onboardingComplete,
});
export const handleOnboardingError = (error: string) => ({
  type: SET_ONBOARDING_ERROR,
  error,
});
export const resetOnboardingState = () => ({
  type: RESET_ONBOARDING,
});

/**
 * Sagas
 */
export function* getOnboarding() {
  try {
    const onboardingComplete = yield call(getData, 'onboardingComplete');
    yield put(updateOnboardingComplete(onboardingComplete));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* resetOnboarding() {
  try {
    yield call(clearAll);
    yield put(resetOnboardingState());
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* onboardingSaga() {
  yield fork(getOnboarding);
  yield takeEvery(SIGN_OUT, resetOnboarding);
}
