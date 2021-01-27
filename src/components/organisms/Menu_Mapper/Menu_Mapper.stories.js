import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_Mapper from './Menu_Mapper';
import {
  USER_PROFILE_MENU,
  NOTIFICATIONS_MENU,
  PROFILE_GUEST_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
  MARKETING_MENU,
  MARKETING_MENU_BUTTONS,
} from '../../../theme/global/config';

const defaultProps = {
  menuData: USER_PROFILE_MENU,
  navigation: () => {},
};

const guestProps = {
  navigation: () => {},
  menuData: [PROFILE_GUEST_MENU],
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

storiesOf('Design System/Organism/Menu_Mapper', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_Mapper_Guest_Profile', () => <Menu_Mapper {...guestProps} />)
  .add('Menu_Mapper_User_Profile', () => <Menu_Mapper {...defaultProps} />)
  .add('Menu_Mapper_Bookings', () => <Menu_Mapper {...bookingProps} />)
  .add('Menu_Mapper_Marketing', () => <Menu_Mapper {...marketingProps} />);
