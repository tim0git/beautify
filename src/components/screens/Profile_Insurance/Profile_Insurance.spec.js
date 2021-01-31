import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Profile_Insurance_Screen from './Profile_Insurance_Screen';

const defaultProps = {};

describe('<Profile_Insurance />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Profile_Insurance_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Insurance_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
});
