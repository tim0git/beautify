/**
 * @name Menu_List
 * @description {description}
 * 
 */
import React from 'react';
import { View, Text } from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Menu_List: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Menu_List')
  return (
     <View style={style.container} testID='Menu_List'>
        <Text>Menu_List</Text>
      </View>
  );
}

export default Menu_List;
