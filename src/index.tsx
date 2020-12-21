/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './state/Store';

import Landing_Page from './components/screens/Landing/Landing_Screen';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Landing_Page />
    </Provider>
  );
};

export default App;
