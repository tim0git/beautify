import * as React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import WebView_Screen from './WebView_Screen';
import {ThemeProvider} from '../../../services/ThemeProvider';
const {WEB_VIEW_URLS} = ThemeProvider('global').config;

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      title: 'About Beautify',
    },
  },
};

describe('<WebView_Screen />', () => {
  describe('<Render>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('should render a web view component', () => {
      const wrapper = mount(<WebView_Screen {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      expect(webView).toExist();
    });
    test('should render a WebView default screen template', () => {
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);
      const webViewDefaultScreenTemplate = wrapper.findWhere(
        (node) => node.prop('testID') === 'WebView_Default_Screen_Template',
      );

      expect(webViewDefaultScreenTemplate).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the title prop to props to WebView', () => {
      const wrapper = mount(<WebView_Screen {...defaultProps} />);

      const webViewScreenWebView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      const webViewComponentProps = webViewScreenWebView.first().props();

      expect(webViewComponentProps).toHaveProperty('source', {uri: WEB_VIEW_URLS[defaultProps.route.params.title]});
    });
    test.todo('should pass the following props from config to WebView');
  });
});
