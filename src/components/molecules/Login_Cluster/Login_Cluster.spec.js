import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Login_Cluster from './Login_Cluster';
import {ThemeProvider} from '../../../services/ThemeProvider';
const {
  config: {treatmentButtonProps, captionProps, loginButtonProps, navigationProps},
} = ThemeProvider('Login_Cluster');
const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Login_Cluster />', () => {
  describe('<Render>', () => {
    test('should render a Login Cluster component', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === 'Login_Cluster');

      expect(LoginCluster).toExist();
    });
    test('should render a Find a Treatment Button', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === treatmentButtonProps.testID);

      expect(LoginCluster).toExist();
    });
    test('should render a Caption Text', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const Caption = wrapper.findWhere((node) => node.prop('testID') === captionProps.testID);

      expect(Caption).toExist();
    });
    test('should render a Login Button', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginButton = wrapper.findWhere((node) => node.prop('testID') === loginButtonProps.testID);

      expect(LoginButton).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to Find a Treatment Button', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginButton = wrapper.findWhere((node) => node.prop('testID') === treatmentButtonProps.testID);

      const TreatmentButtonProps = LoginButton.props();

      expect(TreatmentButtonProps).toHaveProperty('title', treatmentButtonProps.title);
      expect(TreatmentButtonProps).toHaveProperty('type', treatmentButtonProps.type);
      expect(TreatmentButtonProps).toHaveProperty('iconLeft', treatmentButtonProps.iconLeft);
      expect(TreatmentButtonProps).toHaveProperty('iconRight', treatmentButtonProps.iconRight);
      expect(TreatmentButtonProps).toHaveProperty('accessible', treatmentButtonProps.accessible);
      expect(TreatmentButtonProps).toHaveProperty('accessibilityLabel', treatmentButtonProps.accessibilityLabel);
      expect(TreatmentButtonProps).toHaveProperty('accessibilityHint', treatmentButtonProps.accessibilityHint);
      expect(TreatmentButtonProps).toHaveProperty('disabled', treatmentButtonProps.disabled);
      expect(TreatmentButtonProps).toHaveProperty('testID', treatmentButtonProps.testID);
    });
    test('should pass the following props to Login Button', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginButton = wrapper.findWhere((node) => node.prop('testID') === loginButtonProps.testID);

      const LoginButtonProps = LoginButton.props();

      expect(LoginButtonProps).toHaveProperty('title', loginButtonProps.title);
      expect(LoginButtonProps).toHaveProperty('type', loginButtonProps.type);
      expect(LoginButtonProps).toHaveProperty('iconLeft', loginButtonProps.iconLeft);
      expect(LoginButtonProps).toHaveProperty('iconRight', loginButtonProps.iconRight);
      expect(LoginButtonProps).toHaveProperty('accessible', loginButtonProps.accessible);
      expect(LoginButtonProps).toHaveProperty('accessibilityLabel', loginButtonProps.accessibilityLabel);
      expect(LoginButtonProps).toHaveProperty('accessibilityHint', loginButtonProps.accessibilityHint);
      expect(LoginButtonProps).toHaveProperty('disabled', loginButtonProps.disabled);
      expect(LoginButtonProps).toHaveProperty('testID', loginButtonProps.testID);
    });
    test('should pass the following props to Caption Text', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const CaptionText = wrapper.findWhere((node) => node.prop('testID') === captionProps.testID);

      const CaptionProps = CaptionText.props();

      expect(CaptionProps).toHaveProperty('content', captionProps.content);
      expect(CaptionProps).toHaveProperty('type', captionProps.type);
      expect(CaptionProps).toHaveProperty('testID', captionProps.testID);
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    test('should call navigate when Find a Treatment Button onPress is called', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const TreatmentButton = wrapper.findWhere((node) => node.prop('testID') === treatmentButtonProps.testID);

      TreatmentButton.props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test('should call navigate when Find a Treatment Button onPress is called with the following argument', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const TreatmentButton = wrapper.findWhere((node) => node.prop('testID') === treatmentButtonProps.testID);

      TreatmentButton.props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(navigationProps.treatment);
    });
    test('should call navigate when Login Button onPress is called', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginButton = wrapper.findWhere((node) => node.prop('testID') === loginButtonProps.testID);

      LoginButton.props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test('should call navigate when Login Button onPress is called with the following argument', () => {
      const wrapper = shallow(<Login_Cluster {...defaultProps} />);

      const LoginButton = wrapper.findWhere((node) => node.prop('testID') === loginButtonProps.testID);

      LoginButton.props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(navigationProps.login);
    });
  });
});
