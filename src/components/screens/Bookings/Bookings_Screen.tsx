import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Screen_Header from '../../molecules/Screen_Header/Screen_Header';

export interface Props {}

const Bookings_Screen: React.FC<Props> = ({}) => {
  const {styles, config} = ThemeProvider('Bookings');

  const {screenHeaderProps} = config;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Screen_Header {...screenHeaderProps} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Bookings_Screen;
