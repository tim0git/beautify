/**
 * @name Notification_Settings
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../atoms/Header/Header';
import Text from '../../atoms/Text/Text';
import Menu_Mapper from '../../organisms/Menu_Mapper/Menu_Mapper';

export interface Props {
  navigation: {
    navigate: () => void;
    goBack: () => void;
  };
}

const Notification_Settings_Screen: React.FC<Props> = ({navigation}) => {
  const {config, style} = ThemeProvider('Notification_Settings');
  const {barStyle} = ThemeProvider('global').styles;
  const {notificationSettingsHeaderProps} = config;
  const {NOTIFICATIONS_MENU} = ThemeProvider('global').config;

  // Replace with GraphQL Mutation & Query.
  const [notificationSettings, setNotificationSettings] = useState({
    'Booking Complete': true,
    'Upcoming Appointments (48hr)': true,
    'Upcoming Appointments (24hr)': true,
    'Deposit Taken': true,
    'Remaining Payment Taken': true,
    'Payment Failures': true,
    'New Practitioner': true,
  });
  const onValueChange = (title: string) => {
    setNotificationSettings({...notificationSettings, [title]: !notificationSettings[title]});
  };

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper}>
        <Header {...notificationSettingsHeaderProps} />
        <View style={style.container} testID="Notification_Settings_Screen">
          <View style={style.pageInstructionContainer}>
            <Text
              content="Here you can choose the notifications you want to receive (or not recieve)"
              type="Body"
              testID="Notifications_Settings_Instruction_Text"
            />
          </View>
          <Menu_Mapper
            navigation={navigation}
            menuData={NOTIFICATIONS_MENU}
            testID="Notifications_Settings_Menu_Mapper"
            onValueChange={onValueChange}
            notificationSettings={notificationSettings}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Notification_Settings_Screen;
