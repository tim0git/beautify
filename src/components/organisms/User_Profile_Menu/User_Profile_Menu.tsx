/**
 * @name User_Profile_Menu
 * @description {description}
 *
 */
import React from 'react';
// import {View, Text} from 'react-native';
// import {ThemeProvider} from '../../../services/ThemeProvider';
import Menu_List from '../../molecules/Menu_List/Menu_List';
export interface Props {
  userProfileMenu: any;
  navigation: {
    navigate: () => void;
  };
}

const User_Profile_Menu: React.FC<Props> = ({userProfileMenu, navigation}) => {
  // const {config, dict, style} = ThemeProvider('User_Profile_Menu');

  return userProfileMenu.map((menu) => {
    return (
      <Menu_List
        navigation={navigation}
        headerText={menu.headerText}
        DATA={menu.DATA}
        testID={menu.testID}
        key={menu.headerText}
      />
    );
  });
};

export default User_Profile_Menu;
