import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Spinner from './Spinner';

const defaultProps = {
  size: 40,
  color: '#FFFFFF',
};

describe('<Spinner />', () => {
  describe('<Render>', () => {
    test('should render a Spinner component', () => {
      const wrapper = shallow(<Spinner {...defaultProps} />);
      const spinner = wrapper.findWhere((node) => node.prop('testID') === 'Spinner');

      expect(spinner).toExist();
    });
    test('should render the component with the testID prop when it is provided', () => {
      const wrapper = shallow(<Spinner {...defaultProps} testID="TEST_SPINNER_TEST_ID" />);
      const spinner = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SPINNER_TEST_ID');

      expect(spinner).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass color and size prop to activity indictaor component', () => {
      const wrapper = shallow(<Spinner {...defaultProps} />);
      const activityIndictaor = wrapper.findWhere((node) => node.prop('testID') === 'Spinner_Activity_Indicator');

      const activityIndictaorProps = activityIndictaor.props();

      expect(activityIndictaorProps).toHaveProperty('color', defaultProps.color);
      expect(activityIndictaorProps).toHaveProperty('size', defaultProps.size);
    });
  });
});
