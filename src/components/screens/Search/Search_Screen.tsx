import React from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Title from '../../atoms/Title/Title';

export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}
const Search_Screen: React.FC<Props> = ({}) => {
  const {styles, config} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <View style={styles.container}></View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
