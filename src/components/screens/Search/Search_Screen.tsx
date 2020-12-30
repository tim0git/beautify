/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Screen_Instructions from '../../molecules/Screen_Instructions/Screen_Instructions';
import Search_Bar from '../../molecules/Search_Bar/Search_Bar';
import {useQuery} from '@apollo/client';
import {GET_LAUNCH_BY_ID} from '../../../services/graphQueryStore';
export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}
const Search_Screen: React.FC<Props> = ({}) => {
  /**
   * Config, Theme
   */
  const {styles, config} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;
  const {Screen_InstructionsProps, nextFetchPolicy, displayName} = config;

  /**
   * Component State
   */
  const [searchValue, setSearchValue] = useState('');

  /**
   * Data Fetch
   */
  const {loading, error, data, refetch} = useQuery(GET_LAUNCH_BY_ID, {
    variables: {launchId: parseInt(searchValue, 10)},
    nextFetchPolicy,
    displayName,
  });

  const queryGraph = (searchBarValue) => {
    setSearchValue(searchBarValue);
    refetch();
  };

  /**
   * Render
   */
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <View style={styles.container}>
          <Search_Bar testID="Search-SearchBar" onChange={queryGraph} />
          <Screen_Instructions {...Screen_InstructionsProps} testID="Search-ScreenPlaceHolder" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
