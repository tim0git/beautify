import React from 'react';
import {shallow} from 'enzyme';
import IconRN from './Icon';

const defaultProps = {
  name: 'Search',
  size: 30,
  color: 'black',
};

describe('<IconRN>', () => {
  describe('<Render>', () => {
    test('should render a IconRN component', () => {
      const wrapper = shallow(<IconRN {...defaultProps} />);
      const IconIcon = wrapper.findWhere((node) => node.prop('testID') === 'Icon-Icon');

      expect(IconIcon).toExist();
    });
    test('should pass the following props to the Icon component', () => {
      const wrapper = shallow(<IconRN {...defaultProps} />);
      const IconIcon = wrapper.findWhere((node) => node.prop('testID') === 'Icon-Icon');

      const IconProps = IconIcon.props();
      expect(IconProps).toHaveProperty('name'); // prop mapped in component to new name
      expect(IconProps).toHaveProperty('size', defaultProps.size);
      expect(IconProps).toHaveProperty('color', defaultProps.color);
    });
  });
  describe('<Methods>', () => {
    test('should map name prop to correct icon name', () => {
      const wrapper = shallow(<IconRN {...defaultProps} />);
      wrapper.findWhere((node) => node.prop('testID') === 'Icon-Icon');

      const IconIcon = wrapper.findWhere((node) => node.prop('testID') === 'Icon-Icon');

      const IconProps = IconIcon.props();

      expect(IconProps).toHaveProperty('name', 'magnify');
    });
  });
});
