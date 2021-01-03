import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Menu_List from './Menu_List';

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
  describe('<Props>', () => {
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
    test('should pass the folowing props to Legal Stuff Button', () => {
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

      expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(defaultProps.DATA[0].navigationAddress);
    });
  });
});
