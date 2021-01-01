/**
 * @name Screen_Header
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Screen_Header: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Screen_Header');
  return (
    <View style={style.container} testID="Screen_Header">
      <Text>Screen_Header</Text>
    </View>
  );
};

export default Screen_Header;
