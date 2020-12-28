import React, {useState} from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Screen_PlaceHolder from '../../molecules/Screen_PlaceHolder/Screen_PlaceHolder';
import Search_Bar from '../../molecules/Search_Bar/Search_Bar';
export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}
const Search_Screen: React.FC<Props> = ({}) => {
  const {styles, config} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;
  const {Screen_PlaceHolderProps} = config;

  const [value, onChangeText] = useState('');
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <View style={styles.container}>
          <Search_Bar value={value} onChangeText={onChangeText} />
          <Screen_PlaceHolder {...Screen_PlaceHolderProps} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
