/**
 * @name Guest_Welcome
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Guest_Welcome: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Guest_Welcome');
  return (
    <View style={style.container} testID="Guest_Welcome">
      <Text>Guest_Welcome</Text>
    </View>
  );
};

export default Guest_Welcome;
