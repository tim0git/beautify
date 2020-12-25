import 'react-native';
import 'jest-enzyme';

import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';

import {actionCreators, loginIn, LOGIN, authentication, LOGIN_FAIL, syncUserSaga} from './Auth.state';

describe('<Action Creators>', () => {
  const initialState = {
    loading: false,
    errorCode: null,
    isLoggedIn: false,
  };

  const subscribedState = {
    loading: false,
    errorCode: null,
    isLoggedIn: false,
  };

  describe('Auth state - default', () => {
    it('Return an object', () => {
      const state = actionCreators.default(initialState);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginIn', () => {
    it('Return an object', () => {
      const state = actionCreators.loginIn(subscribedState);
      expect(state).toHaveProperty('loading', true);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginInFail', () => {
    it('Return an object', () => {
      const action = {errorCode: 'LOGIN_TEST_ERROR_CODE'};
      const state = actionCreators.loginInFail(subscribedState, action);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', action.errorCode);
      expect(state).toHaveProperty('isLoggedIn', false);
    });
  });

  describe('Auth state - loginInSuccess', () => {
    it('Return an object', () => {
      const state = actionCreators.loginInSuccess(subscribedState);
      expect(state).toHaveProperty('loading', false);
      expect(state).toHaveProperty('errorCode', null);
      expect(state).toHaveProperty('isLoggedIn', true);
    });
  });
});

describe('<Dispatch Actions>', () => {
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
});

// describe('<SAGAS>', () => {
//   describe('syncUserSaga', () => {
//     it('Subscribes the app to Google Firebase', () => {
//       return expectSaga(syncUserSaga)
//         .withReducer(authentication)
//         .hasFinalState({
//           connected: true,
//           loading: false,
//           errorCode: null,
//           isLoggedIn: false,
//         })
//         .run();
//     });

//     it('Handles errors', () => {
//       const ERROR_OBJECT = {
//         name: 'ERROR_OBJECT_NAME',
//         message: 'ERROR_OBJECT_MESSAGE',
//         code: 'ERROR_OBJECT_CODE',
//       };

//       return expectSaga(syncUserSaga)
//         .withReducer(authentication)
//         .provide([[matchers.call.fn(AuthService.subscriber), throwError(ERROR_OBJECT)]])
//         .put({
//           type: SUBSCRIBE_FAIL,
//           error: ERROR_OBJECT.code,
//         })
//         .hasFinalState({
//           connected: false,
//           loading: false,
//           errorCode: ERROR_OBJECT.code,
//           isLoggedIn: false,
//         })
//         .run();
//     });
//   });

//   describe('attemptloginIn', () => {
//     const action = {phoneNumber: 'MOCK PHONE NUMBER'};
//     it('signs a user in with phoneNumber', () => {
//       return expectSaga(attemptloginIn, action)
//         .withReducer(authentication)
//         .hasFinalState({
//           connected: false,
//           loading: false,
//           errorCode: null,
//           isLoggedIn: true,
//         })
//         .run();
//     });

//     it('Handles errors', () => {
//       const ERROR_OBJECT = {
//         name: 'ERROR_OBJECT_NAME',
//         message: 'ERROR_OBJECT_NAME',
//         code: 'ERROR_OBJECT_CODE',
//       };

//       return expectSaga(attemptloginIn, 'MOCK_PHONE_NUMBER')
//         .withReducer(authentication)
//         .provide([[matchers.call.fn(AuthService.loginIn), throwError(ERROR_OBJECT)]])
//         .put({
//           type: LOGIN_FAIL,
//           error: ERROR_OBJECT.code,
//         })
//         .hasFinalState({
//           connected: false,
//           loading: false,
//           errorCode: ERROR_OBJECT.code,
//           isLoggedIn: false,
//         })
//         .run();
//     });
//   });
// });
