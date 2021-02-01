import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Onboarding_Screen from './Onboarding_Screen';

const defaultProps = {};

describe('<Onboarding />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Onboarding_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Onboarding_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
});
