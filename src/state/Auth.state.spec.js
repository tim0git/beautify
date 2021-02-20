import 'react-native';
import 'jest-enzyme';

import {
  authentication,
  actionCreators,
  login,
  loginFailure,
  loginSuccess,
  signOut,
  signOutSuccess,
  signOutFailure,
  syncUser,
  submitCode,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_FAIL,
  SIGN_OUT_SUCCESS,
  SYNC_USER,
  SUBMIT_CODE,
} from './Auth.state';

describe('<Auth.state>', () => {
  describe('<authentication> -reducer', () => {
    const mockState = {test: 'TEST'};
    beforeEach(() => {
      jest.restoreAllMocks();
    });
    test('should call syncUser when it receives action.type SYNC_USER', () => {
      const mockSyncUser = jest.fn();
      jest.spyOn(actionCreators, 'syncUser').mockImplementationOnce(mockSyncUser);
      const mockAction = {type: SYNC_USER};
      authentication(mockState, mockAction);
      expect(mockSyncUser).toHaveBeenCalledTimes(1);
    });
    test('should call login when it receives action.type LOGIN', () => {
      const mockLoginIn = jest.fn();
      jest.spyOn(actionCreators, 'login').mockImplementationOnce(mockLoginIn);
      const mockAction = {type: LOGIN};
      authentication(mockState, mockAction);
      expect(mockLoginIn).toHaveBeenCalledTimes(1);
    });
    test('should call loginInSuccess when it receives action.type LOGIN_SUCCESS', () => {
      const mockLoginInSuccess = jest.fn();
      jest.spyOn(actionCreators, 'loginInSuccess').mockImplementationOnce(mockLoginInSuccess);
      const mockAction = {type: LOGIN_SUCCESS};
      authentication(mockState, mockAction);
      expect(mockLoginInSuccess).toHaveBeenCalledTimes(1);
    });
    test('should call loginInFail when it receives action.type LOGIN_FAIL', () => {
      const mockLoginInFail = jest.fn();
      jest.spyOn(actionCreators, 'loginInFail').mockImplementationOnce(mockLoginInFail);
      const mockAction = {type: LOGIN_FAIL};
      authentication(mockState, mockAction);
      expect(mockLoginInFail).toHaveBeenCalledTimes(1);
    });
    test('should call signOut when it receives action.type SIGN_OUT', () => {
      const mockSignOut = jest.fn();
      jest.spyOn(actionCreators, 'signOut').mockImplementationOnce(mockSignOut);
      const mockAction = {type: SIGN_OUT};
      authentication(mockState, mockAction);
      expect(mockSignOut).toHaveBeenCalledTimes(1);
    });
    test('should call signOutFail when it receives action.type SIGN_OUT_FAIL', () => {
      const mockSignOutFail = jest.fn();
      jest.spyOn(actionCreators, 'signOutFail').mockImplementationOnce(mockSignOutFail);
      const mockAction = {type: SIGN_OUT_FAIL};
      authentication(mockState, mockAction);
      expect(mockSignOutFail).toHaveBeenCalledTimes(1);
    });
    test('should call default when it receives an action.type that is not matched', () => {
      const mockDefault = jest.fn();
      jest.spyOn(actionCreators, 'default').mockImplementationOnce(mockDefault);
      const mockAction = {type: 'NOT_A_VALID_ACTION_TYPE'};
      authentication(mockState, mockAction);
      expect(mockDefault).toHaveBeenCalledTimes(1);
    });
  });

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

    describe('<default>', () => {
      test('Should return state ', () => {
        const state = actionCreators.default(initialState);
        expect(state).toHaveProperty('loading', false);
        expect(state).toHaveProperty('error', null);
        expect(state).toHaveProperty('isLoggedIn', false);
      });
    });
    describe('<syncUser>', () => {
      test('should return loading false', () => {
        const mockAction = {user: {user: 'MOCK_USER'}};
        const state = actionCreators.syncUser(initialState, mockAction);
        expect(state).toHaveProperty('loading', false);
      });
      test('should return isLoggedIn boolean true if user object is defined in action', () => {
        const mockAction = {user: {user: 'MOCK_USER'}};
        const state = actionCreators.syncUser(initialState, mockAction);
        expect(state).toHaveProperty('isLoggedIn', true);
      });
      test('should return isLoggedIn boolean false if user object is undefined in action', () => {
        const mockAction = {user: {user: undefined}};
        const state = actionCreators.syncUser(initialState, mockAction);
        expect(state).toHaveProperty('isLoggedIn', false);
      });
      test('should return user from action', () => {
        const mockAction = {user: {user: 'MOCK_USER'}};
        const state = actionCreators.syncUser(initialState, mockAction);
        expect(state).toHaveProperty('user', mockAction.user);
      });
      test('should return authToken from action', () => {
        const mockAction = {user: {user: 'MOCK_USER'}, authToken: 'MOCK_AUTH_TOKEN'};
        const state = actionCreators.syncUser(initialState, mockAction);
        expect(state).toHaveProperty('authToken', mockAction.authToken);
      });
    });
    describe('<login>', () => {
      test('should return loading true, error null and isLoggedIn false', () => {
        const state = actionCreators.login(subscribedState);
        expect(state).toHaveProperty('loading', true);
        expect(state).toHaveProperty('error', null);
        expect(state).toHaveProperty('isLoggedIn', false);
      });
    });
    describe('<loginInFail>', () => {
      test('should return loading false the error from action and isLoggedIn false', () => {
        const action = {error: 'LOGIN_TEST_ERROR_CODE'};
        const state = actionCreators.loginInFail(subscribedState, action);
        expect(state).toHaveProperty('loading', false);
        expect(state).toHaveProperty('error', action.error);
        expect(state).toHaveProperty('isLoggedIn', false);
      });
    });
    describe('<loginInSuccess>', () => {
      test('should return loading false, error null and isLoggedIn true', () => {
        const state = actionCreators.loginInSuccess(subscribedState);
        expect(state).toHaveProperty('loading', false);
        expect(state).toHaveProperty('error', null);
        expect(state).toHaveProperty('isLoggedIn', true);
      });
    });
    describe('<signOut>', () => {
      test('should return state with loading true', () => {
        const state = actionCreators.signOut(subscribedState);
        expect(state).toHaveProperty('loading', true);
        expect(state).toHaveProperty('error', subscribedState.error);
        expect(state).toHaveProperty('isLoggedIn', subscribedState.isLoggedIn);
      });
    });
    describe('<signOutSuccess>', () => {
      test('should return initial state', () => {
        const state = actionCreators.signOutSuccess(subscribedState);
        expect(state).toHaveProperty('loading', initialState.loading);
        expect(state).toHaveProperty('error', initialState.error);
        expect(state).toHaveProperty('isLoggedIn', initialState.isLoggedIn);
      });
    });
    describe('<signOutFail>', () => {
      test('should return error from action, loading false and isLoggedIn current state', () => {
        const mockAction = {error: 'MOCK_ERROR'};
        const state = actionCreators.signOutFail(subscribedState, mockAction);
        expect(state).toHaveProperty('loading', false);
        expect(state).toHaveProperty('error', mockAction.error);
        expect(state).toHaveProperty('isLoggedIn', initialState.isLoggedIn);
      });
    });
  });

  describe('<Dispatch Actions>', () => {
    describe('syncUser', () => {
      test('should dispatch SYNC_USER with the user passed as argument', () => {
        const mockUser = 'MOCK_USER';
        const mockAuthToken = 'MOCK_TOKEN';
        const dispatch = syncUser(mockUser, mockAuthToken);
        expect(dispatch).toHaveProperty('type', SYNC_USER);
        expect(dispatch).toHaveProperty('user', mockUser);
        expect(dispatch).toHaveProperty('authToken', mockAuthToken);
      });
    });
    describe('login', () => {
      test('should dispatch LOGIN with the phoneNumber passed as argument', () => {
        const mockPhoneNumber = 'MOCK_PHONE_NUMBER';
        const dispatch = login(mockPhoneNumber);
        expect(dispatch).toHaveProperty('type', LOGIN);
        expect(dispatch).toHaveProperty('phoneNumber', mockPhoneNumber);
      });
    });

    describe('loginSuccess', () => {
      test('should dispatch LOGIN_SUCCESS', () => {
        const dispatch = loginSuccess();
        expect(dispatch).toHaveProperty('type', LOGIN_SUCCESS);
      });
    });
    describe('loginFailure', () => {
      test('should dispatch LOGIN_FAIL with the errorCode passed as an argument', () => {
        const mockError = 'MOCK_CODE';
        const dispatch = loginFailure(mockError);
        expect(dispatch).toHaveProperty('type', LOGIN_FAIL);
        expect(dispatch).toHaveProperty('error', mockError);
      });
    });
    describe('submitCode', () => {
      test('should dispatch SUBMIT_CODE with the verificationCode passed as argument', () => {
        const mockVerificationCode = 'MOCK_CODE';
        const dispatch = submitCode(mockVerificationCode);
        expect(dispatch).toHaveProperty('type', SUBMIT_CODE);
        expect(dispatch).toHaveProperty('verificationCode', mockVerificationCode);
      });
    });
    describe('signOut', () => {
      test('should dispatch SIGN_OUT ', () => {
        const dispatch = signOut();
        expect(dispatch).toHaveProperty('type', SIGN_OUT);
      });
    });
    describe('signOutSuccess', () => {
      test('should dispatch SIGN_OUT_SUCCESS ', () => {
        const dispatch = signOutSuccess();
        expect(dispatch).toHaveProperty('type', SIGN_OUT_SUCCESS);
      });
    });
    describe('signOutFailure', () => {
      test('should dispatch SIGN_OUT_FAIL ', () => {
        const mockError = 'MOCK_ERROR';
        const dispatch = signOutFailure(mockError);
        expect(dispatch).toHaveProperty('type', SIGN_OUT_FAIL);
        expect(dispatch).toHaveProperty('error', mockError);
      });
    });
  });
});
