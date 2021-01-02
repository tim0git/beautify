import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Menu_List from './Menu_List';

const defaultProps = {};

describe('<Menu_List />', () => {
  describe('<Render>', () => {
    test('should render a Menu_List component', () => {
      const wrapper = shallow(<Menu_List {...defaultProps} />);
      const MenuList = wrapper.findWhere((node) => node.prop('testID') === 'Menu_List');

      expect(MenuList).toExist();
    });
  });
});
