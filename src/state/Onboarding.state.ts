/**
 * @name Onboarding state
 * @description Sets out the actions, reducer and saga of the onboarding state
 */

import {call, fork, put} from 'redux-saga/effects';
import {SIGN_OUT} from './Auth.state';

/**
 * Actions
 */
export const SET_ONBOARDING_STATE = 'SET_ONBOARDING_STATE';
export const ONBOARDING_ERROR = 'ONBOARDING_ERROR';

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
    case SET_ONBOARDING_STATE: {
      return actionCreators.updateOnboardingComplete(state, action);
    }
    case ONBOARDING_ERROR: {
      return;
    }
    case SIGN_OUT: {
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
  type: SET_ONBOARDING_STATE,
  onboardingComplete,
});
export const handleOnboardingError = (error: string) => ({
  type: SET_ONBOARDING_STATE,
  error,
});

/**
 * Sagas
 */
export function* getOnboarding() {
  try {
    const onboardingComplete = yield call(() => {});

    yield put(updateOnboardingComplete(onboardingComplete));
  } catch (error) {
    yield put(handleOnboardingError(error));
  }
}

export function* onboardingSaga() {
  yield fork(getOnboarding);
}
