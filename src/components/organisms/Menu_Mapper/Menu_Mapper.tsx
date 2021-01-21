/**
 * @name Menu_Mapper
 * @description {description}
 *
 */
import React from 'react';
import {NotificationSettings, MarketingSettings, NotificationsMenu, UserProfileMenu} from '../../../theme/global/types';
import Menu_List from '../../molecules/Menu_List/Menu_List';
export interface Props {
  menuData: UserProfileMenu | NotificationsMenu;
  navigation: {
    navigate: () => void;
  };
  onValueChange?: (title: string) => void;
  switchState?: NotificationSettings | MarketingSettings;
  signOut?: () => void;
  testID: string;
}

const Menu_Mapper: React.FC<Props> = ({menuData, navigation, onValueChange, switchState, signOut}) => {
  // @ts-ignore TODO create a generic type.
  return menuData.map((menu) => {
    return (
      <Menu_List
        navigation={navigation}
        headerText={menu.headerText}
        DATA={menu.DATA}
        testID={menu.testID}
        key={menu.headerText}
        onValueChange={onValueChange}
        // @ts-ignore TODO create a generic type.
        switchState={switchState}
        signOut={signOut}
      />
    );
  });
};

export default Menu_Mapper;
