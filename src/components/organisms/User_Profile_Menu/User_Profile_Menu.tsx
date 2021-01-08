/**
 * @name User_Profile_Menu
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const User_Profile_Menu: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('User_Profile_Menu');
  return (
    <View style={style.container} testID="User_Profile_Menu">
      <Text>User_Profile_Menu</Text>
    </View>
  );
};

export default User_Profile_Menu;
