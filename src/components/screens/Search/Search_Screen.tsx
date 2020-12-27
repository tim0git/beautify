import React from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

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
        <View style={styles.container}>
          <Text>Search Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
