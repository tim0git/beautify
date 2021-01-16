/**
 * @name Menu_Mapper
 * @description {description}
 *
 */
import React from 'react';
import Menu_List from '../../molecules/Menu_List/Menu_List';
export interface Props {
  menuData: any;
  navigation: {
    navigate: () => void;
  };
  testID: string;
}

const Menu_Mapper: React.FC<Props> = ({menuData, navigation}) => {
  return menuData.map((menu) => {
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

export default Menu_Mapper;
