import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

import Guest_Welcome from '../../organisms/Guest_Welcome/Guest_Welcome';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';
// import {Client as ConversationsClient} from '@twilio/conversations';
export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Inbox_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Inbox');

  const {screenTitle, backButton, screenInstructionsProps} = config;

  const renderGuestWelcome = () => {
    return (
      <View style={styles.container}>
        <View style={styles.guestWelcomeContainer}>
          <Guest_Welcome
            screenInstructionsProps={screenInstructionsProps}
            navigation={navigation}
            testID="Inbox_Screen_Guest_Welcome"
          />
        </View>
      </View>
    );
  };

  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Inbox_Screen_Screen_Template"
      render={renderGuestWelcome()}
      backButton={backButton}
    />
  );
};

export default Inbox_Screen;
