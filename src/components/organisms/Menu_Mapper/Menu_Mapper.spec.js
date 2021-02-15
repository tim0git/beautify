import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {mount} from 'enzyme';
import Menu_Mapper from './Menu_Mapper';
import {
  USER_PROFILE_MENU,
  GUEST_PROFILE_MENU,
  NOTIFICATIONS_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
} from '../../../theme/global/config/Constants';

const guestProps = {
  navigation: {navigate: () => {}},
  menuData: GUEST_PROFILE_MENU,
};

const userProps = {
  navigation: {navigate: () => {}},
  menuData: USER_PROFILE_MENU,
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

describe('<Menu_Mapper />', () => {
  describe('<Render>', () => {
    test('should render guest profile menu list when passed as a prop', () => {
      const wrapper = mount(<Menu_Mapper {...guestProps} />);
      const profileGuestMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_Guest_Menu');
      expect(profileGuestMenu).toExist();
    });
    test('should render user profile menu list when passed as a prop', () => {
      const wrapper = mount(<Menu_Mapper {...userProps} />);
      const profileUserMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_User_Menu');
      expect(profileUserMenu).toExist();
    });
    test('should render notifications bookings menu', () => {
      const wrapper = mount(<Menu_Mapper {...bookingProps} />);
      const notificationsBookingsMenu = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notifications_Bookings_Menu',
      );
      expect(notificationsBookingsMenu).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass onValueChange and notificationSettings as a prop to Menu_List when they are declared', () => {
      const wrapper = mount(<Menu_Mapper {...bookingProps} />);
      const notificationsBookingsMenu = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notifications_Bookings_Menu',
      );

      const notificationsBookingsMenuProps = notificationsBookingsMenu.first().props();

      expect(notificationsBookingsMenuProps).toHaveProperty('onValueChange', bookingProps.onValueChange);
      expect(notificationsBookingsMenuProps).toHaveProperty('switchState', bookingProps.switchState);
    });
  });
});
