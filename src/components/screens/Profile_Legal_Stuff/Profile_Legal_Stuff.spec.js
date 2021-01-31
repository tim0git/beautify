import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Profile_Legal_Stuff_Screen from './Profile_Legal_Stuff_Screen';
import {ThemeProvider} from '../../../services/ThemeProvider';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Profile_Legal_Stuff />', () => {
  const {LEGAL_STUFF_MENU} = ThemeProvider('global').config;
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Profile_Legal_Stuff_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Legal_Stuff_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
    test('should render a menu mapper component', () => {
      const wrapper = mount(<Profile_Legal_Stuff_Screen {...defaultProps} />);
      const menuMapper = wrapper.findWhere((node) => node.prop('testID') === 'Legal_Stuff_Menu_Mapper');
      expect(menuMapper).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to default screen template', () => {
      const wrapper = shallow(<Profile_Legal_Stuff_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Legal_Stuff_Default_Screen_Template',
      );
      const defaultScreenTemplateProps = defaultScreenTemplate.props();
      expect(defaultScreenTemplateProps).toHaveProperty('screenTitle', 'Legal Stuff');
      expect(defaultScreenTemplateProps).toHaveProperty('backButton', true);
    });
    test('should pass the following props to menu mapper', () => {
      const wrapper = mount(<Profile_Legal_Stuff_Screen {...defaultProps} />);
      const menuMapper = wrapper.findWhere((node) => node.prop('testID') === 'Legal_Stuff_Menu_Mapper');
      const menuMapperProps = menuMapper.props();
      expect(menuMapperProps).toHaveProperty('navigation', defaultProps.navigation);
      expect(menuMapperProps).toHaveProperty('menuData', LEGAL_STUFF_MENU);
    });
  });
});
