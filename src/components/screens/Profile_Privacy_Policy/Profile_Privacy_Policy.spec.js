import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Profile_Privacy_Policy_Screen from './Profile_Privacy_Policy_Screen';

const defaultProps = {};

describe('<Profile_Privacy_Policy />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Profile_Privacy_Policy_Screen {...defaultProps} />);
      const defaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Privacy_Policy_Default_Screen_Template',
      );
      expect(defaultScreenTemplate).toExist();
    });
  });
});
