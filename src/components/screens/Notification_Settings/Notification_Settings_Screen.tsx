/**
 * @name Notification_Settings
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Notification_Settings_Screen: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Notification_Settings');
  const {barStyle} = ThemeProvider('global').styles;
  return (
    <View style={style.container} testID="Notification_Settings_Screen">
      <Text>Notification_Settings</Text>
    </View>
  );
};

export default Notification_Settings_Screen;
