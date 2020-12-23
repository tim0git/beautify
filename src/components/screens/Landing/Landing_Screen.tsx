import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';

export interface Props {
  subscribeFireBaseAuth: () => void;
  signIn: (phoneNumber: string) => void;
}

const Landing_Page: React.FC<Props> = ({subscribeFireBaseAuth, signIn}) => {
  const {styles} = ThemeProvider('Landing');

  useEffect(() => {
    subscribeFireBaseAuth();
  }, [subscribeFireBaseAuth]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text testID="Landing_Page-Page_Title">beautify</Text>
          <Button
            title="Lets Begin"
            onPress={() => {
              signIn('+447902762616');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Landing_Page;
