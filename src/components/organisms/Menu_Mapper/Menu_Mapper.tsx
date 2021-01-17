/**
 * @name Menu_Mapper
 * @description {description}
 *
 */
import React from 'react';
import {NotificationSettings, NotificationsMenu, UserProfileMenu} from '../../../theme/global/types';
import Menu_List from '../../molecules/Menu_List/Menu_List';
export interface Props {
  menuData: UserProfileMenu | NotificationsMenu;
  navigation: {
    navigate: () => void;
  };
  onValueChange?: (title: string) => void;
  notificationSettings?: NotificationSettings;
  signOut?: () => void;
  testID: string;
}

const Menu_Mapper: React.FC<Props> = ({menuData, navigation, onValueChange, notificationSettings, signOut}) => {
  // @ts-ignore set until i can create a compound type or ts can type check both types provided for menuData.
  return menuData.map((menu) => {
    return (
      <Menu_List
        navigation={navigation}
        headerText={menu.headerText}
        DATA={menu.DATA}
        testID={menu.testID}
        key={menu.headerText}
        onValueChange={onValueChange}
        notificationSettings={notificationSettings}
        signOut={signOut}
      />
    );
  });
};

export default Menu_Mapper;
