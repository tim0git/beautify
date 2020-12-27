import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import SearchBarButton from '../../molecules/SearchBarButton/SearchBarButton';

export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}

const Home_Screen: React.FC<Props> = (props) => {
  const {styles, config} = ThemeProvider('Home');
  const {barStyle} = ThemeProvider('global').styles;
  const {SearchBarButtonProps} = config;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <View style={styles.container}>
          <View style={styles.searchBarButtonContainer}>
            <SearchBarButton
              {...SearchBarButtonProps}
              disabled={false}
              testID="Home-SearchBarButton"
              onPress={() => {
                props.navigation.navigate('Search_Screen');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home_Screen;
