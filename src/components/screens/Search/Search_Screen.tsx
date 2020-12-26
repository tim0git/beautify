import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import SearchBarButton from '../../molecules/SearchBarButton/SearchBarButton';

export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}

const Search_Screen: React.FC<Props> = (props) => {
  const {styles} = ThemeProvider('Search');
  const {barStyle} = ThemeProvider('global').styles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.searchBarButtonContainer}>
            <SearchBarButton
              title="Search for a treatment or provider"
              type="default"
              textAlign="center"
              accessible={true}
              accessibilityLabel="TEST A11Y LABEL"
              accessibilityHint="TEST A11Y HINT"
              accessibilityRole="button"
              disabled={false}
              testID="TEST_ID"
              onPress={() => {
                props.navigation.navigate('Test Path');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search_Screen;
