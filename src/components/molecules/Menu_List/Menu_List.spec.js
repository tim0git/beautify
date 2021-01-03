import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Menu_List from './Menu_List';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
  headerTextProps: {
    headerText: 'TEST_HEADER_TEXT',
    testID: 'TEST_HEADER_TEXT_TEST_ID',
  },
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
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'TEST_HEADER_TEXT_TEST_ID');

      expect(headerText).toExist();
    });
    test('should render a Menu_List About Beautify button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID');

      expect(headerText).toExist();
    });
    test('should render a Menu_List Help Center button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'TEST_HELP_CENTER_MENU_BUTTON_TEST_ID');

      expect(headerText).toExist();
    });
    test('should render a Menu_List Legal Stuff button component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'TEST_LEGAL_STUFF_MENU_BUTTON_TEST_ID');

      expect(headerText).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the folowing props to header component', () => {
      const wrapper = mount(<Menu_List {...defaultProps} />);
      const headerText = wrapper.findWhere((node) => node.prop('testID') === 'TEST_HEADER_TEXT_TEST_ID');

      const headerTextProps = headerText.first().props();

      expect(headerTextProps).toHaveProperty('testID', defaultProps.headerTextProps.testID);
      expect(headerTextProps).toHaveProperty('headerText', defaultProps.headerTextProps.headerText);
    });
  });
});
