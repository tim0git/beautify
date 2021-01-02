/**
 * @name Menu_List
 * @description {description}
 *
 */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../Header/Header';
import Button from '../../atoms/Button/Button';

export interface Props {}

const DATA = [
  {
    id: 'About Beautify',
    title: 'About Beautify',
  },
  {
    id: 'Help Centre',
    title: 'Help Centre',
  },
  {
    id: 'Legal Stuff',
    title: 'Legal Stuff',
  },
];

const Menu_List: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Menu_List');

  const header = () => {
    return <Header headerText="Hello World" type="Menu" />;
  };

  const renderItem = ({item}) => {
    return (
      <Button
        {...item}
        type="Menu"
        iconLeft={true}
        iconRight={true}
        onPress={() => {
          console.log('pressed');
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
