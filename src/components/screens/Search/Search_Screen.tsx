import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Search_Screen: React.FC<Props> = ({}) => {
  const {styles} = ThemeProvider('Search');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Search Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
