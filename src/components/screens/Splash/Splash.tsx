/**
 * @name Splash
 * @description {description}
 *
 */
import React from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import IconRN from '../../atoms/Icon/Icon';

export interface Props {}

const Splash: React.FC<Props> = ({}) => {
  const {style} = ThemeProvider('Splash');
  const {barStyle} = ThemeProvider('global').styles;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper} testID="Splash">
        <View style={style.container}>
          <IconRN testID="Splash_Icon" name="Bookings" color="white" size={40} />
          <Text testID="Splash_Text" style={style.splashText}>
            beautify
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Splash;
