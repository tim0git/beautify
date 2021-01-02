/**
 * @name Menu_List
 * @description {description}
 *
 */
import React from 'react';
import {View, FlatList} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../Header/Header';
import Button from '../../atoms/Button/Button';

export interface Props {
  navigation: {
    navigate: (navigationAddress: string) => void;
  };
  // DATA: [object];
}

const DATA = [
  {
    id: 'About Beautify',
    title: 'About Beautify',
    navigationAddress: 'About_Beautify',
  },
  {
    id: 'Help Center',
    title: 'Help Center',
    navigationAddress: 'Help_Center',
  },
  {
    id: 'Legal Stuff',
    title: 'Legal Stuff',
    navigationAddress: 'Legal',
  },
];

const Menu_List: React.FC<Props> = ({navigation}) => {
  const {config, style} = ThemeProvider('Menu_List');

  const {headerProps, buttonProps} = config;

  const handleOnPress = (navigationAddress: string) => {
    navigation.navigate(navigationAddress);
  };

  const header = () => {
    return <Header {...headerProps} headerText="Hello World" />;
  };

  const renderItem = ({item}) => {
    return (
      <Button
        {...item}
        {...buttonProps}
        onPress={() => {
          handleOnPress(item.navigationAddress);
        }}
      />
    );
  };

  return (
    <View style={style.container} testID="Menu_List">
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
