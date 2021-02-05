import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';

export interface Props {
  loginIn: (phoneNumber: string) => void;
  submitCode: (verificationCode: string) => void;
}

const Landing_Page: React.FC<Props> = ({loginIn, submitCode, navigation}) => {
  const {styles} = ThemeProvider('Landing');
  const {barStyle} = ThemeProvider('global').styles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView>
        <View style={styles.container}>
          <Text testID="Landing_Page-Page_Title">beautify</Text>
          <Button
            title="Submit Number"
            onPress={() => {
              loginIn('+447902762616');
            }}
          />
          <Button
            title="Submit code"
            onPress={() => {
              submitCode('654321');
              navigation.navigate('Home');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Landing_Page;
