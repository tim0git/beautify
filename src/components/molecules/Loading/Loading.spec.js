import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Loading from './Loading';

const defaultProps = {};

describe('<Loading />', () => {
  describe('<Render>', () => {
    test('should render a Loading component', () => {
      const wrapper = shallow(<Loading {...defaultProps} />);

      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === 'Loading');

      expect(LoginCluster).toExist();
    });
    test('should render a Loading Spinner', () => {
      const wrapper = shallow(<Loading {...defaultProps} />);

      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === 'Loading_Spinner');

      expect(LoginCluster).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the testID prop to the Loading component when it is provided', () => {
      const wrapper = shallow(<Loading {...defaultProps} testID="TEST_LOADING_TEST_ID" />);

      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === 'TEST_LOADING_TEST_ID');

      expect(LoginCluster).toExist();
    });
  });
});
