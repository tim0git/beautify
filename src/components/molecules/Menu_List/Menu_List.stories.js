import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_List from './Menu_List';
import {
  PROFILE_GUEST_MENU,
  NOTIFICATIONS_BOOKINGS_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
  LEGAL_STUFF_GENERAL_MENU,
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
  switchState: {
    [NOTIFICATIONS_MENU_BUTTONS.BookingComplete]: true,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48]: false,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24]: true,
  },
  testID: 'TEST_MENU_LIST_NOTIFICATIONS_BOOKINGS',
};

const legalStuffMenuProps = {
  navigation: {
    navigate: () => {},
  },
  DATA: LEGAL_STUFF_GENERAL_MENU.DATA,
  headerText: LEGAL_STUFF_GENERAL_MENU.headerText,
  testID: 'TEST_LEGAL_STUFF_GENERAL_MENU',
};

storiesOf('Design System/Molecule/Menu_List', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_List_Profile_Guest', () => <Menu_List {...profileGuestProps} />)
  .add('Menu_List_Notification_Menu', () => <Menu_List {...notificationMenuProps} />)
  .add('Menu_List_Legal_Stuff', () => <Menu_List {...legalStuffMenuProps} />);
