import reducers from './reducers';

describe('<Reducers>', () => {
  describe('<subscribeFireBaseAuth>', () => {
    test('reducers return subscribed state', () => {
      let state;
      state = reducers(
        {authentication: {connected: false, loading: true, errorCode: null, isLoggedIn: false}},
        {type: 'SUBSCRIBE_SUCCESS'},
      );
      expect(state).toEqual({authentication: {connected: true, loading: false, errorCode: null, isLoggedIn: false}});
    });
  });
  describe('<signIn>', () => {
    test('reducers return signIn state', () => {
      let state;
      state = reducers(
        {authentication: {connected: true, loading: true, errorCode: null, isLoggedIn: false}},
        {
          type: 'SIGN_IN_SUCCESS',
          user: {}, // TEST USER OBJECT
        },
      );
      expect(state).toEqual({authentication: {connected: true, loading: false, errorCode: null, isLoggedIn: true}});
    });
  });
});
