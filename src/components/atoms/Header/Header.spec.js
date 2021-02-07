import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Header from './Header';
import {ThemeProvider} from '../../../services/ThemeProvider';
import * as RootNavigation from '../../../RootNavigation';

const screenProps = {
  headerText: 'TEST_SCREEN_TITLE',
  testID: 'TEST_SCREEN_HEADER',
  type: 'Screen',
  backButton: undefined,
};

const backButtonProps = {
  ...screenProps,
  backButton: true,
};

const nextButtonProps = {
  ...screenProps,
  nextButton: true,
  headerRHSButtonAction: jest.fn(),
};

describe('<Header />', () => {
  const {config} = ThemeProvider('Header');

  const {screenHeaderTextProps} = config;

  describe('<Render> - Screen', () => {
    test('should render a Screen Header Component', () => {
      const wrapper = shallow(<Header {...screenProps} />);

      const ScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SCREEN_HEADER');

      expect(ScreenHeader).toExist();
    });
    test('should render a Text Component Component', () => {
      const wrapper = shallow(<Header {...screenProps} />);

      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);

      expect(ScreenHeaderText).toExist();
    });
    test('should NOT render a back button', () => {
      const wrapper = shallow(<Header {...screenProps} />);

      const headerBackButton = wrapper.findWhere((node) => node.prop('testID') === 'Header_Back_Button');

      expect(headerBackButton).not.toExist();
    });
  });
  describe('<Render> - Back Button', () => {
    test('should render a Screen Header Component', () => {
      const wrapper = shallow(<Header {...backButtonProps} />);

      const ScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SCREEN_HEADER');

      expect(ScreenHeader).toExist();
    });
    test('should render a Text Component Component', () => {
      const wrapper = shallow(<Header {...backButtonProps} />);

      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);

      expect(ScreenHeaderText).toExist();
    });
    test('should render a back button', () => {
      const wrapper = shallow(<Header {...backButtonProps} />);

      const headerBackButton = wrapper.findWhere((node) => node.prop('testID') === 'Header_Back_Button');

      expect(headerBackButton).toExist();
    });
  });
  describe('<Render> - Next button', () => {
    test('should render a Screen Header Component', () => {
      const wrapper = shallow(<Header {...nextButtonProps} />);
      const ScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SCREEN_HEADER');
      expect(ScreenHeader).toExist();
    });
    test('should render a Text Component Component', () => {
      const wrapper = shallow(<Header {...nextButtonProps} />);
      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);
      expect(ScreenHeaderText).toExist();
    });
    test('should render a next button', () => {
      const wrapper = shallow(<Header {...nextButtonProps} />);
      const headerBackButton = wrapper.findWhere((node) => node.prop('testID') === 'Header_Next_Button');
      expect(headerBackButton).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to Text component', () => {
      const wrapper = shallow(<Header {...screenProps} />);

      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);
      const ScreenHeaderTextProps = ScreenHeaderText.props();
      expect(ScreenHeaderTextProps).toHaveProperty('type', screenHeaderTextProps.type);
      expect(ScreenHeaderTextProps).toHaveProperty('testID', screenHeaderTextProps.testID);
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('should call navigate.goBack when back button is pressed', () => {
      const mockGoBack = jest.fn();
      jest.spyOn(RootNavigation, 'goBack').mockImplementationOnce(mockGoBack);

      const wrapper = shallow(<Header {...backButtonProps} />);

      const headerBackButton = wrapper.findWhere((node) => node.prop('testID') === 'Header_Back_Button');

      headerBackButton.props().onPress();

      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
    test('should NOT call navigate.goBack when back button has NOT been pressed', () => {
      const mockGoBack = jest.fn();
      jest.spyOn(RootNavigation, 'goBack').mockImplementationOnce(mockGoBack);

      shallow(<Header {...backButtonProps} />);

      expect(mockGoBack).not.toHaveBeenCalled();
    });

    test('should call headerRHSButtonAction when next button is pressed', () => {
      const wrapper = shallow(<Header {...nextButtonProps} />);

      const headerNextButton = wrapper.findWhere((node) => node.prop('testID') === 'Header_Next_Button');

      headerNextButton.props().onPress();

      expect(nextButtonProps.headerRHSButtonAction).toHaveBeenCalledTimes(1);
    });
  });
});
