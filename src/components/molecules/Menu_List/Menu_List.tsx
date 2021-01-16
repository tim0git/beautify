/**
 * @name Menu_List
 * @description {description}
 *
 */
import React from 'react';
import {View, FlatList} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import Menu_Row from '../Menu_Row/Menu_Row';

type MenuButtonObject = {
  id: string;
  title: string;
  navigationAddress: string;
  testID: string;
};

export interface Props {
  navigation: {
    navigate: (navigationAddress: string, {title: string}) => void;
  };
  DATA: [MenuButtonObject];
  headerText: string;
  onValueChange?: () => string;
  notificationSettings?: {};
  testID: string;
}

const Menu_List: React.FC<Props> = ({navigation, DATA, testID, headerText, onValueChange, notificationSettings}) => {
  const {config, style} = ThemeProvider('Menu_List');

  const {headerProps, menuRowSwitchProps, buttonProps} = config;

  const handleOnPress = (navigationAddress: string, title: string) => {
    navigation.navigate(navigationAddress, {title});
  };

  const header = () => {
    return <Header {...headerProps} headerText={headerText} testID="Menu_List_Header" />;
  };

  const renderButton = (item) => {
    return (
      <Button
        {...item}
        {...buttonProps}
        onPress={() => {
          handleOnPress(item.navigationAddress, item.title);
        }}
      />
    );
  };

  const renderMenuRowSwitch = (item) => {
    return (
      <Menu_Row
        {...item}
        {...menuRowSwitchProps}
        onValueChange={onValueChange}
        isEnabled={notificationSettings[item.title]}
      />
    );
  };

  const renderItem = ({item}) => {
    return onValueChange ? renderMenuRowSwitch(item) : renderButton(item);
  };

  return (
    <View style={style.container} testID={testID || 'Menu_List'}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={header}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Menu_List;
