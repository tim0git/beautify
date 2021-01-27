import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Map_View from './Map_View';

const defaultProps = {
  location: {
    latitude: 51.50853,
    longitude: -0.12574,
  },
};

describe('<Map_View />', () => {
  describe('<Render>', () => {
    test('should render a Map View', () => {
      const wrapper = shallow(<Map_View {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Map_View');
      expect(webView).toExist();
    });
    test('should render a Map View wehn a location has not been passed', () => {
      const wrapper = shallow(<Map_View />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Map_View');
      expect(webView).toExist();
    });
  });
  describe('<Props>', () => {
    test('should revieve the following props', () => {
      const wrapper = shallow(<Map_View {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Map_View');
      const webViewProps = webView.props();
      expect(webViewProps).toHaveProperty('region');
      expect(webViewProps).toHaveProperty('provider', 'google');
      expect(webViewProps).toHaveProperty('mapType', 'standard');
    });
    test('should pass a region prop to Map_View that has the following properties', () => {
      const wrapper = shallow(<Map_View {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'Map_View');
      const webViewRegionProps = webView.prop('region');
      expect(webViewRegionProps).toHaveProperty('latitude', expect.any(Number));
      expect(webViewRegionProps).toHaveProperty('longitude', expect.any(Number));
      expect(webViewRegionProps).toHaveProperty('latitudeDelta', expect.any(Number));
      expect(webViewRegionProps).toHaveProperty('longitudeDelta', expect.any(Number));
    });
  });
});
