import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Search_Screen: React.FC<Props> = ({}) => {
  const {styles} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Search Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
