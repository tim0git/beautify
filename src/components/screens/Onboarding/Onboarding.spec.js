import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Onboarding_Screen from './Onboarding_Screen';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
  skipOnboarding: jest.fn(),
};

describe('<Onboarding />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Onboarding_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Onboarding_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
    test('should render a login cluster', () => {
      const wrapper = mount(<Onboarding_Screen {...defaultProps} />);
      const loginCluster = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Screen_Login_Cluster');
      expect(loginCluster).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass headerRHSButtonAction[skipOnboarding] & backButton to defaultScreen template', () => {
      const wrapper = shallow(<Onboarding_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Onboarding_Default_Screen_Template',
      );
      const defaultScreenTemplateProps = defaultScreenTemplate.props();
      expect(defaultScreenTemplateProps).toHaveProperty('backButton', false);
      expect(defaultScreenTemplateProps).toHaveProperty('headerRHSButtonAction', defaultProps.skipOnboarding);
    });
  });
});
