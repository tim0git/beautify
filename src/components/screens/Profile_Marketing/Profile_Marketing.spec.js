import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Profile_Marketing_Screen from './Profile_Marketing_Screen';

const defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

describe('<Profile_Marketing />', () => {
  describe('<Render>', () => {
    test('should render a marketing screen component', () => {
      const wrapper = shallow(<Profile_Marketing_Screen {...defaultProps} />);
      const switchState = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Marketing_Default_Screen_Template',
      );
      expect(switchState).toExist();
    });
  });
});
