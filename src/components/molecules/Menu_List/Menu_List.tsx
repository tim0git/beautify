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
  testID: string;
}

const Menu_List: React.FC<Props> = ({navigation, DATA, testID, headerText}) => {
  const {config, style} = ThemeProvider('Menu_List');

  const {headerProps, buttonProps} = config;

  const handleOnPress = (navigationAddress: string, title: string) => {
    navigation.navigate(navigationAddress, {title});
  };

  const header = () => {
    return <Header {...headerProps} headerText={headerText} testID="Menu_List_Header" />;
  };

  const renderItem = ({item}) => {
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
