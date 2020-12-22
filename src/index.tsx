/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './state/Redux/Store';

import Landing_Page from './containers/Landing_Container';

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Landing_Page />
    </Provider>
  );
};

export default App;
