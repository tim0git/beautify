import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../atoms/Header/Header';
import Menu_List from '../../molecules/Menu_List/Menu_List';
import Guest_Welcome from '../../organisms/Guest_Welcome/Guest_Welcome';
export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Profile_Screen: React.FC<Props> = ({navigation}) => {
  const {styles, config} = ThemeProvider('Profile');
  const {PROFILE_GUEST_MENU} = ThemeProvider('global').config;

  const {screenHeaderProps, screenInstructionsProps} = config;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.pageWrapper} testID="Profile_Screen">
        <Header {...screenHeaderProps} />
        <View style={styles.container}>
          <View style={styles.guestWelcomeContainer}>
            <Guest_Welcome
              screenInstructionsProps={screenInstructionsProps}
              navigation={navigation}
              testID="Profile_Screen_Guest_Welcome"
            />
          </View>
          <View style={styles.menuListContainer}>
            <Menu_List
              navigation={navigation}
              DATA={PROFILE_GUEST_MENU.DATA}
              headerText={PROFILE_GUEST_MENU.headerText}
              testID="Search_Screen_Menu_List"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile_Screen;
