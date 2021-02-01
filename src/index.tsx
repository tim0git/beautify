/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './state/Redux/Store';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

import AppNavigationContainer from './navigator';
import Splash from './components/screens/Splash/Splash';
import {getData} from './services/AsyncStorage';

const App = (): React.ReactElement => {
  const [onboardingStatus, setOnboardingStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOnboardingStatus() {
      const onboardingComplete = await getData('onboardingComplete');
      if (onboardingComplete) {
        setOnboardingStatus(true);
        setLoading(false);
      } else {
        setOnboardingStatus(false);
        setLoading(false);
      }
    }
    getOnboardingStatus();
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{loading ? <Splash /> : AppNavigationContainer(onboardingStatus)}</ApolloProvider>
    </Provider>
  );
};

export default App;
