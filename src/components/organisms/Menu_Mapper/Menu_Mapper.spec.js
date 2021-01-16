import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Menu_Mapper from './Menu_Mapper';
import {
  USER_PROFILE_MENU,
  PROFILE_GUEST_MENU,
  NOTIFICATIONS_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
} from '../../../theme/global/config/Constants';

const guestProps = {
  navigation: {navigate: () => {}},
  menuData: [PROFILE_GUEST_MENU],
};

const userProps = {
  navigation: {navigate: () => {}},
  menuData: USER_PROFILE_MENU,
};

const bookingProps = {
  menuData: NOTIFICATIONS_MENU,
  onValueChange: () => {},
  notificationSettings: {
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
      const wrapper = shallow(<Menu_Mapper {...guestProps} />);
      const profileGuestMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_Guest_Menu');
      expect(profileGuestMenu).toExist();
    });
    test('should render user profile menu list when passed as a prop', () => {
      const wrapper = shallow(<Menu_Mapper {...userProps} />);
      const profileUserMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_User_Menu');
      expect(profileUserMenu).toExist();
    });
    test('should render notificatons bookings menu', () => {
      const wrapper = shallow(<Menu_Mapper {...bookingProps} />);
      const notificatonsBookingsMenu = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notificatons_Bookings_Menu',
      );
      expect(notificatonsBookingsMenu).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass onValueChange and notificatonSettings as a prop to Menu_List when they are declared', () => {
      const wrapper = shallow(<Menu_Mapper {...bookingProps} />);
      const notificatonsBookingsMenu = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notificatons_Bookings_Menu',
      );

      const notificatonsBookingsMenuProps = notificatonsBookingsMenu.props();

      expect(notificatonsBookingsMenuProps).toHaveProperty('onValueChange', bookingProps.onValueChange);
      expect(notificatonsBookingsMenuProps).toHaveProperty('notificationSettings', bookingProps.notificationSettings);
    });
  });
});
