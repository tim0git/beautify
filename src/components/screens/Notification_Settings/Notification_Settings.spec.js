import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Notification_Settings_Screen from './Notification_Settings_Screen';

const defaultProps = {};

describe('<Notification_Settings />', () => {
  describe('<Render>', () => {
    test('should render a notification settings component', () => {
      const wrapper = shallow(<Notification_Settings_Screen {...defaultProps} />);
      const notificationSettings = wrapper.findWhere((node) => node.prop('testID') === 'Notification_Settings_Screen');
      expect(notificationSettings).toExist();
    });
  });
});
