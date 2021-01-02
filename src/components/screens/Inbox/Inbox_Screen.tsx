import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../molecules/Header/Header';
import Guest_Welcome from '../../organisms/Guest_Welcome/Guest_Welcome';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Inbox_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Inbox');

  const {screenHeaderProps, screenInstructionsProps} = config;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.pageWrapper}>
        <Header {...screenHeaderProps} />
        <View style={styles.container}>
          <View style={styles.guestWelcomeContainer}>
            <Guest_Welcome screenInstructionsProps={screenInstructionsProps} navigation={navigation} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Inbox_Screen;
