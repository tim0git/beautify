/**
 * @name Switch
 * @description {description}
 * 
 */
import React from 'react';
import { View, Text } from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Switch: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Switch')
  return (
     <View style={style.container} testID='Switch'>
        <Text>Switch</Text>
      </View>
  );
}

export default Switch;
