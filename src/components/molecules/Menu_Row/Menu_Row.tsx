/**
 * @name Menu_Row
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Menu_Row: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Menu_Row');
  return (
    <View style={style.container} testID="Menu_Row">
      <Text>Menu_Row</Text>
    </View>
  );
};

export default Menu_Row;
