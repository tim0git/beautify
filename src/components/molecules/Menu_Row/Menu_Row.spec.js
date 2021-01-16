import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Menu_Row from './Menu_Row';

const defaultProps = {
  title: 'Booking Complete',
  type: 'Switch',
  onValueChange: jest.fn(),
  testID: 'TEST_ID',
};

describe('<Menu_Row />', () => {
  describe('<Render>', () => {
    test('should render a menu row component', () => {
      const wrapper = shallow(<Menu_Row {...defaultProps} />);
      const menuRow = wrapper.findWhere((node) => node.prop('testID') === 'Menu_Row');

      expect(menuRow).toExist();
    });
    test('should render a menu row text component', () => {
      const wrapper = shallow(<Menu_Row {...defaultProps} />);
      const menuRowText = wrapper.findWhere((node) => node.prop('testID') === 'Menu_Row_Menu_Text');

      expect(menuRowText).toExist();
    });
    test('should render a menu row switch component', () => {
      const wrapper = shallow(<Menu_Row {...defaultProps} />);
      const menuRowSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Menu_Row_Switch');

      expect(menuRowSwitch).toExist();
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    test('should call onValueChange when the Switch is activated', () => {
      const wrapper = shallow(<Menu_Row {...defaultProps} />);
      const menuRowSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Menu_Row_Switch');

      menuRowSwitch.props().onValueChange();

      expect(defaultProps.onValueChange).toHaveBeenCalledTimes(1);
    });
    test('should call onValueChange with the button title as the argument', () => {
      const wrapper = shallow(<Menu_Row {...defaultProps} />);
      const menuRowSwitch = wrapper.findWhere((node) => node.prop('testID') === 'Menu_Row_Switch');

      menuRowSwitch.props().onValueChange();

      expect(defaultProps.onValueChange).toHaveBeenCalledWith(defaultProps.title);
    });
  });
});
