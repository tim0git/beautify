import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_List from './Menu_List';
import {
  PROFILE_GUEST_MENU,
  NOTIFICATIONS_BOOKINGS_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
} from '../../../theme/global/config';

const profileGuestProps = {
  navigation: {
    navigate: () => {},
  },
  DATA: PROFILE_GUEST_MENU.DATA,
  headerText: PROFILE_GUEST_MENU.headerText,
  testID: 'TEST_MENU_LIST_GUEST_PROFILE',
};

const notificationMenuProps = {
  navigation: {
    navigate: () => {},
  },
  DATA: NOTIFICATIONS_BOOKINGS_MENU.DATA,
  headerText: NOTIFICATIONS_BOOKINGS_MENU.headerText,
  onValueChange: () => {},
  notificationSettings: {
    [NOTIFICATIONS_MENU_BUTTONS.BookingComplete]: true,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48]: false,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24]: true,
  },
  testID: 'TEST_MENU_LIST_NOTIFICATIONS_BOOKINGS',
};

storiesOf('Design System/Molecule/Menu_List', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_List_Profile_Guest', () => <Menu_List {...profileGuestProps} />)
  .add('Menu_List_Notification_Menu', () => <Menu_List {...notificationMenuProps} />);
