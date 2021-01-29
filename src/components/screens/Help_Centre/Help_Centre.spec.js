import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Help_Centre_Screen from './Help_Centre_Screen';

const defaultProps = {};

describe('<Help_Centre />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Help_Centre_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Help_Centre_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to default screen template', () => {
      const wrapper = shallow(<Help_Centre_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Help_Centre_Default_Screen_Template',
      );
      const defaultScreenTemplateProps = defaultScreenTemplate.props();
      expect(defaultScreenTemplateProps).toHaveProperty('screenTitle', 'About Beautify');
      expect(defaultScreenTemplateProps).toHaveProperty('backButton', true);
    });
  });
});
