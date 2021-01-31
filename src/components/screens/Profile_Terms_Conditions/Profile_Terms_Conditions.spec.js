import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Profile_Terms_Conditions_Screen from './Profile_Terms_Conditions_Screen';

const defaultProps = {};

describe('<Profile_Terms_Conditions />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Profile_Terms_Conditions_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Terms_Conditions_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
});
