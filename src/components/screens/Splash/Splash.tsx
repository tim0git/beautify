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
  const {barStyle} = ThemeProvider('global').styles;
  const {config, dict, style} = ThemeProvider('Splash');
  const {splashIconProps} = config;
  const {splashScreenText} = dict;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper} testID="Splash">
        <View style={style.container}>
          <IconRN testID="Splash_Icon" {...splashIconProps} />
          <Text testID="Splash_Text" style={style.splashText}>
            {splashScreenText}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Splash;
