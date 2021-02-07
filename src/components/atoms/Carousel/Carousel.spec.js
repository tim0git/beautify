import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Carousel from './Carousel';

const defaultProps = {};

describe('<Carousel />', () => {
  describe('<Render>', () => {
    test('should render a Carousel component', () => {
      const wrapper = shallow(<Carousel {...defaultProps} />);
      const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel');
      expect(carousel).toExist();
    });
  });
});
