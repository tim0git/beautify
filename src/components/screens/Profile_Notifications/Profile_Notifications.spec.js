import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Profile_Notifications_Screen from './Profile_Notifications_Screen';

const defaultProps = {};

describe('<Profile_Notifications />', () => {
  describe('<Render>', () => {
    test('should render a profile notications component', () => {
      const wrapper = shallow(<Profile_Notifications_Screen {...defaultProps} />);
      const notificationSettings = wrapper.findWhere(
        (node) => node.prop('testID') === 'Profile_Notifications_Screen_Template',
      );
      expect(notificationSettings).toExist();
    });
  });
});
