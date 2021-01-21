/**
 * @name Menu_Mapper
 * @description {description}
 *
 */
import React from 'react';
import {MenuSettings, MenuMapperData} from '../../../theme/global/types';
import Menu_List from '../../molecules/Menu_List/Menu_List';
export interface Props {
  menuData: MenuMapperData;
  navigation: {
    navigate: () => void;
  };
  onValueChange?: (title: string) => void;
  switchState?: MenuSettings;
  signOut?: () => void;
  testID: string;
}

// @ts-ignore
const Menu_Mapper: React.FC<Props> = ({menuData, navigation, onValueChange, switchState, signOut}) => {
  return menuData.map((menu) => {
    return (
      <Menu_List
        navigation={navigation}
        headerText={menu.headerText}
        DATA={menu.DATA}
        testID={menu.testID}
        key={menu.headerText}
        onValueChange={onValueChange}
        switchState={switchState}
        signOut={signOut}
      />
    );
  });
};

export default Menu_Mapper;
