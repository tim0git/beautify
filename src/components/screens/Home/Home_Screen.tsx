import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';
export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
}

const Home_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Home');
  const {screenTitle, backButton, showHeader, SearchBarButtonProps} = config;

  const renderHome = () => {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarButtonContainer}>
          <Button
            {...SearchBarButtonProps}
            disabled={false}
            testID="Home_SearchBarButton"
            onPress={() => {
              navigation.navigate('Search_Screen');
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Home_Screen_Screen_Template"
      render={renderHome()}
      backButton={backButton}
      showHeader={showHeader}
    />
  );
};

export default Home_Screen;
