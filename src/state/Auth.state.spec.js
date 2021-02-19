import 'react-native';
import 'jest-enzyme';

import {
  actionCreators,
  loginIn,
  loginFailure,
  loginSuccess,
  syncUser,
  submitCode,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SYNC_USER,
  SUBMIT_CODE,
} from './Auth.state';

describe('<Action Creators>', () => {
  const initialState = {
    loading: false,
    error: null,
    isLoggedIn: false,
  };

  const subscribedState = {
    loading: false,
    error: null,
    isLoggedIn: false,
  };

  describe('Auth state - default', () => {
    it('Return an object', () => {
      const state = actionCreators.default(initialState);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('error', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginIn', () => {
    it('Return an object', () => {
      const state = actionCreators.loginIn(subscribedState);
      expect(state).toHaveProperty('loading', true);
      expect(state).toHaveProperty('error', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginInFail', () => {
    it('Return an object', () => {
      const action = {error: 'LOGIN_TEST_ERROR_CODE'};
      const state = actionCreators.loginInFail(subscribedState, action);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('error', action.error);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginInSuccess', () => {
    it('Return an object', () => {
      const state = actionCreators.loginInSuccess(subscribedState);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('error', null);
      expect(state).toHaveProperty('isLoggedIn', true);
    });
  });
});

describe('<Dispatch Actions>', () => {
  describe('syncUser', () => {
    it('should dispatch SYNC_USER with the user passed as argument', () => {
      const user = 'MOCK_USER';
      const authToken = 'MOCK_TOKEN';
      const dispatch = syncUser(user, authToken);
      expect(dispatch).toEqual({
        type: SYNC_USER,
        user,
        authToken,
      });
    });
  });

  describe('loginIn', () => {
    it('should dispatch LOGIN with the phoneNumber passed as argument', () => {
      const phoneNumber = 'MOCK_PHONE_NUMBER';
      const dispatch = loginIn(phoneNumber);
      expect(dispatch).toEqual({
        type: LOGIN,
        phoneNumber,
      });
    });
  });

  describe('submitCode', () => {
    it('should dispatch SUBMIT_CODE with the verificationCode passed as argument', () => {
      const verificationCode = 'MOCK_CODE';
      const dispatch = submitCode(verificationCode);
      expect(dispatch).toEqual({
        type: SUBMIT_CODE,
        verificationCode,
      });
    });
  });

  describe('loginSuccess', () => {
    it('should dispatch LOGIN_SUCCESS', () => {
      const dispatch = loginSuccess();
      expect(dispatch).toEqual({
        type: LOGIN_SUCCESS,
      });
    });
  });

  describe('loginFailure', () => {
    it('should dispatch LOGIN_FAIL with the errorCode passed as an argument', () => {
      const error = 'MOCK_CODE';
      const dispatch = loginFailure(error);
      expect(dispatch).toEqual({
        type: LOGIN_FAIL,
        error,
      });
    });
  });
});
