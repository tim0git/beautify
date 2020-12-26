import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Bookings_Screen: React.FC<Props> = ({}) => {
  const {styles} = ThemeProvider('Bookings');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Bookings Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Bookings_Screen;
