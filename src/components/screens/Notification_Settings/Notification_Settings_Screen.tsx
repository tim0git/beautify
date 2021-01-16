/**
 * @name Notification_Settings
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Header from '../../atoms/Header/Header';
import Menu_Mapper from '../../organisms/Menu_Mapper/Menu_Mapper';

export interface Props {}

const Notification_Settings_Screen: React.FC<Props> = ({navigation}) => {
  const {config, dict, style} = ThemeProvider('Notification_Settings');
  const {barStyle} = ThemeProvider('global').styles;
  const {notificationSettingsHeaderProps} = config;
  const {NOTIFICATIONS_MENU, NOTIFICATIONS_MENU_BUTTONS} = ThemeProvider('global').config;
  const [notificationSettings, setNotificationSettings] = useState({
    [NOTIFICATIONS_MENU_BUTTONS.BookingComplete]: true,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48]: false,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24]: true,
    [NOTIFICATIONS_MENU_BUTTONS.DepositTaken]: false,
    [NOTIFICATIONS_MENU_BUTTONS.RemainingPaymentTaken]: true,
    [NOTIFICATIONS_MENU_BUTTONS.PaymentFailures]: true,
    [NOTIFICATIONS_MENU_BUTTONS.NewPractitioner]: false,
  });

  const onValueChange = (item) => {
    console.log('called', item);
    setNotificationSettings({...notificationSettings, [item]: !notificationSettings[item]});
  };

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper}>
        <Header {...notificationSettingsHeaderProps} />
        <View style={style.container} testID="Notification_Settings_Screen">
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
