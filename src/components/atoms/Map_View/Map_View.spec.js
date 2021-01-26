import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Map_View from './Map_View';

const defaultProps = {
  region: {},
};

describe('<Map_View />', () => {
  describe('<Render>', () => {
    test('should render a Map View', () => {
      const wrapper = shallow(<Map_View {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Web_View');
      expect(webView).toExist();
    });
  });
  describe('<Props>', () => {
    test('should revieve the following props', () => {
      const wrapper = shallow(<Map_View {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Web_View');
      const webViewProps = webView.props();
      expect(webViewProps).toHaveProperty('region');
    });
  });
});
