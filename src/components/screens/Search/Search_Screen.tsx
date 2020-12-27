import React from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Screen_PlaceHolder from '../../molecules/Screen_PlaceHolder/Screen_PlaceHolder';
export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}
const Search_Screen: React.FC<Props> = ({}) => {
  const {styles, config} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;
  const {Screen_PlaceHolderProps} = config;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <View style={styles.container}>
          <Text>Place Holder for search bar</Text>
          <Text>Place Holder for search bar</Text>
          <Screen_PlaceHolder {...Screen_PlaceHolderProps} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
