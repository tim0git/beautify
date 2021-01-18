import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Guest_Welcome from '../../organisms/Guest_Welcome/Guest_Welcome';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Bookings_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Bookings');
  const {screenTitle, backButton, screenInstructionsProps, loginClusterProps} = config;

  const renderGuestWelcome = () => {
    return (
      <View style={styles.container}>
        <View style={styles.guestWelcomeContainer}>
          <Guest_Welcome
            screenInstructionsProps={screenInstructionsProps}
            navigation={navigation}
            loginClusterProps={loginClusterProps}
            testID="Bookings_Screen_Guest_Welcome"
          />
        </View>
      </View>
    );
  };

  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Bookings_Default_Screen_Template"
      render={renderGuestWelcome()}
      backButton={backButton}
    />
  );
};

export default Bookings_Screen;
