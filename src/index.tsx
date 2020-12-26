/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './state/Redux/Store';

import AppNavigationContainer from './navigator';

const App = (): React.ReactElement => {
  return <Provider store={store}>{AppNavigationContainer()}</Provider>;
};

export default App;
