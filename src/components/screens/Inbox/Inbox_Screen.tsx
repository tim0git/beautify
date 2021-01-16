import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../atoms/Header/Header';
import Guest_Welcome from '../../organisms/Guest_Welcome/Guest_Welcome';
import {Client as ConversationsClient} from '@twilio/conversations';
export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Inbox_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Inbox');
  const {barStyle} = ThemeProvider('global').styles;

  const {screenHeaderProps, screenInstructionsProps} = config;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper}>
        <Header {...screenHeaderProps} />
        <View style={styles.container}>
          <View style={styles.guestWelcomeContainer}>
            <Guest_Welcome
              screenInstructionsProps={screenInstructionsProps}
              navigation={navigation}
              testID="Inbox_Screen_Guest_Welcome"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Inbox_Screen;
