/**
 * @name Menu_Mapper
 * @description {description}
 *
 */
import React from 'react';
import {FlatList} from 'react-native';
import {MenuSettings, MenuMapperData} from '../../../theme/global/types';
import Menu_List from '../../molecules/Menu_List/Menu_List';
import {ThemeProvider} from '../../../services/ThemeProvider';
export interface Props {
  menuData: MenuMapperData;
  navigation: {
    navigate: () => void;
  };
  onValueChange?: (title: string) => void;
  switchState?: MenuSettings;
  signOut?: () => void;
  scrollEnabled?: boolean;
  testID: string;
}

// @ts-ignore
const Menu_Mapper: React.FC<Props> = ({
  menuData,
  navigation,
  onValueChange,
  switchState,
  signOut,
  scrollEnabled = false,
}) => {
  const {style} = ThemeProvider('Menu_Mapper');

  // @ts-ignore
  const renderItem = ({item}) => (
    <Menu_List
      navigation={navigation}
      headerText={item.headerText}
      DATA={item.DATA}
      testID={item.testID}
      key={item.headerText}
      onValueChange={onValueChange}
      switchState={switchState}
      signOut={signOut}
    />
  );

  return (
    <FlatList
      data={menuData}
      renderItem={renderItem}
      keyExtractor={(item) => item.testID}
      bounces={scrollEnabled}
      style={scrollEnabled ? style.container : null}
    />
  );
};

export default Menu_Mapper;
