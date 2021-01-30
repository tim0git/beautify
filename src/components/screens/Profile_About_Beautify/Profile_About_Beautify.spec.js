import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import About_Beautify_Screen from './Profile_About_Beautify_Screen';

const defaultProps = {};

describe('<Profile_About_Beautify />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<About_Beautify_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'About_Beautify_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to default screen template', () => {
      const wrapper = shallow(<About_Beautify_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'About_Beautify_Default_Screen_Template',
      );
      const defaultScreenTemplateProps = defaultScreenTemplate.props();
      expect(defaultScreenTemplateProps).toHaveProperty('screenTitle', 'About Beautify');
      expect(defaultScreenTemplateProps).toHaveProperty('backButton', true);
    });
  });
});
