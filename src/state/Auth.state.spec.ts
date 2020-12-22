import 'react-native';
import 'jest-enzyme';

import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';
import AuthService from '../services/Auth';

import {
  actionCreators,
  subscribeFireBaseAuth,
  signIn,
  SUBSCRIBE_FIREBASE_AUTH,
  SIGN_IN,
  attemptSubscribe,
  authentication,
  SUBSCRIBE_FAIL,
  attemptSignIn,
  SIGN_IN_FAIL,
} from './Auth.state';

describe('<Action Creators>', () => {
  const initialState = {
    connected: false,
    loading: false,
    errorCode: null,
    isLoggedIn: false,
    user: null,
  };

  const subscribedState = {
    connected: true,
    loading: false,
    errorCode: null,
    isLoggedIn: false,
    user: {},
  };

  describe('Auth state - default', () => {
    it('Return an object', () => {
      const state = actionCreators.default(initialState);
      expect(state).toHaveProperty('connected', false);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - subscribeFireBaseAuth', () => {
    it('Return an object', () => {
      const state = actionCreators.subscribeFireBaseAuth(initialState);
      expect(state).toHaveProperty('connected', false);
      expect(state).toHaveProperty('loading', true);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - subscribeFail', () => {
    it('Return an object', () => {
      const action = {error: 'SUBSCRIBE_TEST_ERROR_CODE'};
      const state = actionCreators.subscribeFail(initialState, action);
      expect(state).toHaveProperty('connected', false);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', action.error);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - subscribeSuccess', () => {
    it('Return an object', () => {
      const action = {user: {}};
      const state = actionCreators.subscribeSuccess(initialState, action);
      expect(state).toHaveProperty('connected', true);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - signIn', () => {
    it('Return an object', () => {
      const state = actionCreators.signIn(subscribedState);
      expect(state).toHaveProperty('connected', true);
      expect(state).toHaveProperty('loading', true);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - signInFail', () => {
    it('Return an object', () => {
      const action = {error: 'SIGN_IN_TEST_ERROR_CODE'};
      const state = actionCreators.signInFail(subscribedState, action);
      expect(state).toHaveProperty('connected', true);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', action.error);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - signInSuccess', () => {
    it('Return an object', () => {
      const action = {user: {}};
      const state = actionCreators.signInSuccess(subscribedState, action);
      expect(state).toHaveProperty('connected', true);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', true);
    });
  });
});

describe('<Dispatch Actions>', () => {
  describe('subscribeFireBaseAuth', () => {
    it('should dispatch SUBSCRIBE_FIREBASE_AUTH', () => {
      const dispatch = subscribeFireBaseAuth();
      expect(dispatch).toEqual({
        type: SUBSCRIBE_FIREBASE_AUTH,
      });
    });
  });

  describe('signIn', () => {
    it('should dispatch SIGN_IN with the phoneNumber passed as argument', () => {
      const phoneNumber = 'MOCK_PHONE_NUMBER';
      const dispatch = signIn(phoneNumber);
      expect(dispatch).toEqual({
        type: SIGN_IN,
        phoneNumber,
      });
    });
  });
});

describe('<SAGAS>', () => {
  describe('attemptSubscribe', () => {
    it('Subscribes the app to Google Firebase', () => {
      return expectSaga(attemptSubscribe)
        .withReducer(authentication)
        .hasFinalState({
          connected: true,
          loading: false,
          errorCode: null,
          isLoggedIn: false,
          user: undefined,
        })
        .run();
    });

    it('Handles errors', () => {
      const ERROR_OBJECT = {
        name: 'ERROR_OBJECT_NAME',
        message: 'ERROR_OBJECT_MESSAGE',
      };

      return expectSaga(attemptSubscribe)
        .withReducer(authentication)
        .provide([[matchers.call.fn(AuthService.subscriber), throwError(ERROR_OBJECT)]])
        .put({
          type: SUBSCRIBE_FAIL,
          error: ERROR_OBJECT,
        })
        .hasFinalState({
          connected: false,
          loading: false,
          errorCode: ERROR_OBJECT,
          isLoggedIn: false,
          user: null,
        })
        .run();
    });
  });

  describe('attemptSignIn', () => {
    const action = {phoneNumber: 'MOCK PHONE NUMBER'};
    it('signs a user in with phoneNumber', () => {
      return expectSaga(attemptSignIn, action)
        .withReducer(authentication)
        .hasFinalState({
          connected: false,
          loading: false,
          errorCode: null,
          isLoggedIn: true,
          user: undefined,
        })
        .run();
    });

    it('Handles errors', () => {
      const ERROR_OBJECT = {
        name: 'ERROR_OBJECT_NAME',
        message: 'ERROR_OBJECT_MESSAGE',
      };

      return expectSaga(attemptSignIn, 'MOCK_PHONE_NUMBER')
        .withReducer(authentication)
        .provide([[matchers.call.fn(AuthService.signIn), throwError(ERROR_OBJECT)]])
        .put({
          type: SIGN_IN_FAIL,
          error: ERROR_OBJECT,
        })
        .hasFinalState({
          connected: false,
          loading: false,
          errorCode: ERROR_OBJECT,
          isLoggedIn: false,
          user: null,
        })
        .run();
    });
  });
});
