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
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

import AppNavigationContainer from './navigator';

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{AppNavigationContainer()}</ApolloProvider>
    </Provider>
  );
};

export default App;
