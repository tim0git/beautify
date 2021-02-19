import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Menu_List from './Menu_List';
import {
  NOTIFICATIONS_BOOKINGS_MENU,
  NOTIFICATIONS_MENU_BUTTONS,
  MARKETING_GENERAL_MENU,
  MARKETING_MENU_BUTTONS,
} from '../../../theme/global/config';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
  headerText: 'TEST_HEADER_TEXT',
  DATA: [
    {
      id: 'About Beautify',
      title: 'About Beautify',
      navigationAddress: 'About_Beautify',
      testID: 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
    },
    {
      id: 'Help Center',
      title: 'Help Center',
      navigationAddress: 'Help_Center',
      testID: 'TEST_HELP_CENTER_MENU_BUTTON_TEST_ID',
    },
    {
      id: 'Legal Stuff',
      title: 'Legal Stuff',
      navigationAddress: 'Legal',
      testID: 'TEST_LEGAL_STUFF_MENU_BUTTON_TEST_ID',
    },
  ],
};

const notificationMenuProps = {
  DATA: NOTIFICATIONS_BOOKINGS_MENU.DATA,
  headerText: NOTIFICATIONS_BOOKINGS_MENU.headerText,
  onValueChange: jest.fn(),
  switchState: {
    [NOTIFICATIONS_MENU_BUTTONS.BookingComplete]: true,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48]: false,
    [NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24]: true,
  },
  testID: 'TEST_MENU_LIST_NOTIFICATIONS_BOOKINGS',
};

const marketingMenuProps = {
  DATA: MARKETING_GENERAL_MENU.DATA,
  onValueChange: jest.fn(),
  switchState: {
    [MARKETING_MENU_BUTTONS.ViaEmail]: true,
    [MARKETING_MENU_BUTTONS.ViaSMS]: false,
  },
  testID: 'TEST_MENU_LIST_MARKETING_PREFERENCES',
};

describe('<Menu_List />', () => {
  describe('<Render>', () => {
    test('should render a Menu_List component', () => {
      const wrapper = shallow(<Menu_List {...defaultProps} />);
      const MenuList = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List');

      expect(MenuList).toExist();
    });
    test('should render a Menu_List header component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List_Header');

      expect(headerText).toExist();
    });
    test('should render a Menu_List About Beautify button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const aboutBeautifyButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
      );

      expect(aboutBeautifyButton).toExist();
    });
    test('should render a Menu_List Help Center button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const helpCenterButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_HELP_CENTER_MENU_BUTTON_TEST_ID',
      );

      expect(helpCenterButton).toExist();
    });
    test('should render a Menu_List Legal Stuff button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const legalStuffButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_LEGAL_STUFF_MENU_BUTTON_TEST_ID',
      );

      expect(legalStuffButton).toExist();
    });
  });
  describe('<Render> -MARKETING_GENERAL_MENU', () => {
    test('should render a Menu_List component', () => {
      const wrapper = shallow(<Menu_List {...marketingMenuProps} />);
      const MenuList = wrapper.findWhere((node) => node.prop('testID') === 'TEST_MENU_LIST_MARKETING_PREFERENCES');

      expect(MenuList).toExist();
    });
    test('should NOT render a menu header component', () => {
      const wrapper = shallow(<Menu_List {...marketingMenuProps} />);
      const MenuListHeader = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List_Header');

      expect(MenuListHeader).not.toExist();
    });
  });

  describe('<Props> - Button', () => {
    test('should pass the folowing props to header component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List_Header');

      const headerTextProps = headerText.first().props();

      expect(headerTextProps).toHaveProperty('headerText', defaultProps.headerText);
    });
    test('should pass the folowing props to About Beautify Button', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const aboutBeautifyButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
      );

      const aboutBeautifyButtonProps = aboutBeautifyButton.first().props();

      const {id, title, testID, navigationAddress} = defaultProps.DATA[0];

      expect(aboutBeautifyButtonProps).toHaveProperty('id', id);
      expect(aboutBeautifyButtonProps).toHaveProperty('title', title);
      expect(aboutBeautifyButtonProps).toHaveProperty('testID', testID);
      expect(aboutBeautifyButtonProps).toHaveProperty('navigationAddress', navigationAddress);
    });
    test('should pass the folowing props to Help Center Button', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const helpCenterButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_HELP_CENTER_MENU_BUTTON_TEST_ID',
      );

      const helpCenterButtonProps = helpCenterButton.first().props();

      const {id, title, testID, navigationAddress} = defaultProps.DATA[1];

      expect(helpCenterButtonProps).toHaveProperty('id', id);
      expect(helpCenterButtonProps).toHaveProperty('title', title);
      expect(helpCenterButtonProps).toHaveProperty('testID', testID);
      expect(helpCenterButtonProps).toHaveProperty('navigationAddress', navigationAddress);
    });
    test('should pass the following props to Legal Stuff Button', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const legalStuffButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_LEGAL_STUFF_MENU_BUTTON_TEST_ID',
      );

      const legalStuffButtonProps = legalStuffButton.first().props();

      const {id, title, testID, navigationAddress} = defaultProps.DATA[2];

      expect(legalStuffButtonProps).toHaveProperty('id', id);
      expect(legalStuffButtonProps).toHaveProperty('title', title);
      expect(legalStuffButtonProps).toHaveProperty('testID', testID);
      expect(legalStuffButtonProps).toHaveProperty('navigationAddress', navigationAddress);
    });
  });
  describe('<Props> - menuRowSwitch', () => {
    test('should pass the following props to header component', () => {
      const wrapper = mount(<Menu_List {...notificationMenuProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List_Header');

      const headerTextProps = headerText.first().props();

      expect(headerTextProps).toHaveProperty('headerText', notificationMenuProps.headerText);
    });
    test('should pass the following props to Booking Complete menu row switch', () => {
      const wrapper = mount(<Menu_List {...notificationMenuProps} />);
      const bookingCompleteMenuRowSwitch = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notifications_Menu_Booking_Complete',
      );

      const bookingCompleteMenuRowSwitchProps = bookingCompleteMenuRowSwitch.first().props();

      const {id, title, testID} = notificationMenuProps.DATA[0];

      expect(bookingCompleteMenuRowSwitchProps).toHaveProperty('id', id);
      expect(bookingCompleteMenuRowSwitchProps).toHaveProperty('title', title);
      expect(bookingCompleteMenuRowSwitchProps).toHaveProperty('type', 'Switch');
      expect(bookingCompleteMenuRowSwitchProps).toHaveProperty('testID', testID);
      expect(bookingCompleteMenuRowSwitchProps).toHaveProperty('onValueChange', notificationMenuProps.onValueChange);
    });
    test('should pass the folowing props to Via Email menu row switch', () => {
      const wrapper = mount(<Menu_List {...marketingMenuProps} />);
      const viaEmailSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Marketing_Menu_Via_Email');
      const viaEmailSwitchProps = viaEmailSwitch.first().props();

      const {id, title, testID} = marketingMenuProps.DATA[0];

      expect(viaEmailSwitchProps).toHaveProperty('id', id);
      expect(viaEmailSwitchProps).toHaveProperty('title', title);
      expect(viaEmailSwitchProps).toHaveProperty('type', 'Switch');
      expect(viaEmailSwitchProps).toHaveProperty('testID', testID);
      expect(viaEmailSwitchProps).toHaveProperty('onValueChange', marketingMenuProps.onValueChange);
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    test('should call navigation when About Beautify Button is pressed', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const aboutBeautifyButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
      );

      aboutBeautifyButton.first().props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test('should call navigation with navigationAddress prop when About Beautify Button is pressed', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const aboutBeautifyButton = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
      );

      aboutBeautifyButton.first().props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(defaultProps.DATA[0].navigationAddress, {
        title: 'About Beautify',
      });
    });
    test('should call onValueChange prop when the menuRowSwitch component is toggled', () => {
      const wrapper = mount(<Menu_List {...notificationMenuProps} />);
      const bookingComplete = wrapper.findWhere(
        (node) => node.prop('testID') === 'Notifications_Menu_Booking_Complete',
      );

      bookingComplete.first().props().onValueChange();

      expect(notificationMenuProps.onValueChange).toHaveBeenCalledTimes(1);
    });
  });
});
