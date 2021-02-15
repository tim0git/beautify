import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Menu_Mapper from './Menu_Mapper';
import {
  USER_PROFILE_MENU,
  NOTIFICATIONS_MENU,
  GUEST_PROFILE_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
  MARKETING_MENU,
  MARKETING_MENU_BUTTONS,
  LEGAL_STUFF_MENU,
} from '../../../theme/global/config';

const defaultProps = {
  menuData: USER_PROFILE_MENU,
  navigation: () => {},
};

const guestProps = {
  navigation: () => {},
  menuData: GUEST_PROFILE_MENU,
};

const bookingProps = {
  menuData: NOTIFICATIONS_MENU,
  onValueChange: () => {},
  switchState: {
    [NOTIFICATIONS_MENU_BUTTONS.BookingComplete]: true,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48]: false,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24]: true,
    [NOTIFICATIONS_MENU_BUTTONS.DepositTaken]: false,
    [NOTIFICATIONS_MENU_BUTTONS.RemainingPaymentTaken]: true,
    [NOTIFICATIONS_MENU_BUTTONS.PaymentFailures]: true,
    [NOTIFICATIONS_MENU_BUTTONS.NewPractitioner]: false,
  },
};

const marketingProps = {
  menuData: MARKETING_MENU,
  onValueChange: () => {},
  switchState: {
    [MARKETING_MENU_BUTTONS.ViaEmail]: true,
    [MARKETING_MENU_BUTTONS.ViaSMS]: false,
  },
};

const legalStuffProps = {
  menuData: LEGAL_STUFF_MENU,
  navigation: () => {},
};

storiesOf('Design System/Organism/Menu_Mapper', module)
  .add('Menu_Mapper_Guest_Profile', () => <Menu_Mapper {...guestProps} />)
  .add('Menu_Mapper_User_Profile', () => <Menu_Mapper {...defaultProps} />)
  .add('Menu_Mapper_Bookings', () => <Menu_Mapper {...bookingProps} />)
  .add('Menu_Mapper_Marketing', () => <Menu_Mapper {...marketingProps} />)
  .add('Menu_Mapper_Legal_Stuff', () => <Menu_Mapper {...legalStuffProps} />);
