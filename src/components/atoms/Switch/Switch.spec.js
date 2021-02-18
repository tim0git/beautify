import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Switch from './Switch';

const defaultProps = {
  isEnabled: true,
  onValueChange: jest.fn(),
  disabled: false,
};

describe('<Switch />', () => {
  describe('<Render>', () => {
    test('should render a switch component', () => {
      const wrapper = shallow(<Switch {...defaultProps} />);
      const toggleSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Switch');
      expect(toggleSwitch).toExist();
    });
  });
  describe('<Props>', () => {
    test('Switch should receive the following props', () => {
      const wrapper = shallow(<Switch {...defaultProps} />);
      const toggleSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Switch');
      const toggleSwitchProps = toggleSwitch.props();
      expect(toggleSwitchProps).toHaveProperty('disabled', defaultProps.disabled);
      expect(toggleSwitchProps).toHaveProperty('ios_backgroundColor');
      expect(toggleSwitchProps).toHaveProperty('trackColor');
      expect(toggleSwitchProps).toHaveProperty('thumbColor');
      expect(toggleSwitchProps).toHaveProperty('onValueChange', defaultProps.onValueChange);
      expect(toggleSwitchProps).toHaveProperty('value', defaultProps.isEnabled);
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    test('should call onValueChange when the switch is operated', () => {
      const wrapper = shallow(<Switch {...defaultProps} />);
      const toggleSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Switch');
      toggleSwitch.props().onValueChange();
      expect(defaultProps.onValueChange).toHaveBeenCalledTimes(1);
    });
  });
});
