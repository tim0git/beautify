import * as React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
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

const errorProps = {
  ...defaultProps,
  route: {
    params: {
      title: 'TEST_ERROR_WEBVIEW_URL',
    },
  },
};

describe('<WebView_Screen />', () => {
  describe('<Render>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('should render a web view component', () => {
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);
      const webView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen');

      expect(webView).toExist();
    });
    test('should render a WebView Screen Header component', () => {
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);
      const webViewScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_Header');

      expect(webViewScreenHeader).toExist();
    });
    test('should render a Loading component when loading is true [Loading is the default state]', () => {
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);
      const webViewLoading = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_Loading');

      expect(webViewLoading).toExist();
    });
    test('should render a Error component when error is true', () => {
      /**
       * Mock useState hooks
       */
      const initialLoadingState = false;
      const initialErrorState = true;

      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([initialLoadingState, {}])
        .mockReturnValueOnce([initialErrorState, {}]);

      /**
       * Test
       */
      const wrapper = shallow(<WebView_Screen {...errorProps} />);

      const webViewError = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_Error');
      const webViewScreenWebView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      expect(webViewError).toExist();
      expect(webViewScreenWebView).not.toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the title prop to props to WebView', () => {
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);

      const webViewScreenWebView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      const webViewComponentProps = webViewScreenWebView.props();

      expect(webViewComponentProps).toHaveProperty('source', {uri: WEB_VIEW_URLS[defaultProps.route.params.title]});
    });
    test.todo('should pass the following props from config to WebView');
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('should set state with loading false when WebView onLoad is called', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Test
       */
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);

      const webViewScreenWebView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      webViewScreenWebView.props().onLoad();

      expect(setState).toHaveBeenCalledWith(false);
    });
    test('should set state with error true and loading false when WebView onHttpError is called', () => {
      /**
       * Mock useState hook
       */
      const setStateLoading = jest.fn();
      const useStateMockLoading = (initState) => [initState, setStateLoading];
      const setStateError = jest.fn();
      const useStateMockError = (initState) => [initState, setStateError];

      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(useStateMockLoading)
        .mockImplementationOnce(useStateMockError);

      /**
       * Test
       */
      const wrapper = shallow(<WebView_Screen {...defaultProps} />);

      const webViewScreenWebView = wrapper.findWhere((node) => node.prop('testID') === 'WebView_Screen_WebView');

      webViewScreenWebView.props().onHttpError();

      expect(setStateLoading).toHaveBeenCalledWith(false);
      expect(setStateError).toHaveBeenCalledWith(true);
    });
  });
});