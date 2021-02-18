import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, mount} from 'enzyme';
import Guest_Welcome from './Guest_Welcome';

const defaultProps = {
  screenInstructionsProps: {
    instructionProps: {
      content: 'TEST_INSTRUCTION_CONTENT',
      type: 'default',
      testID: 'TEST_INSTRUCTION_TEST_ID',
    },
    bodyProps: {
      content: 'TEST_BODY_CONTENT',
      type: 'default',
      testID: 'TEST_BODY_TEST_ID',
    },
    testID: 'TEST_SCREEN_INSTRUCTIONS_TEST_ID',
  },
  loginClusterProps: {
    captionProps: {
      content: 'TEST_CAPTION_CONTENT',
      type: 'default',
      testID: 'TEST_CAPTION_TEST_ID',
    },
    testID: 'TEST_LOGIN_CLUSTER_TEST_ID',
  },
  navigation: {
    navigate: jest.fn(),
  },
  testID: 'TEST_GUEST_WELCOME',
};

describe('<Guest_Welcome />', () => {
  describe('<Render>', () => {
    test('should render a Guest Welcome component', () => {
      const wrapper = shallow(<Guest_Welcome {...defaultProps} />);
      const MenuList = wrapper.findWhere((node) => node.prop('testID') === 'TEST_GUEST_WELCOME');

      expect(MenuList).toExist();
    });
    test('should render a screen instructions component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const ScreenInstructions = wrapper.findWhere((node) => node.prop('testID') === 'TEST_INSTRUCTION_TEST_ID');

      expect(ScreenInstructions).toExist();
    });
    test('should render a Login Cluster component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const LoginCluster = wrapper.findWhere((node) => node.prop('testID') === 'TEST_LOGIN_CLUSTER_TEST_ID');

      expect(LoginCluster).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to the screen instructions instruction component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const ScreenInstructions = wrapper.findWhere((node) => node.prop('testID') === 'TEST_INSTRUCTION_TEST_ID');

      const ScreenInstructionProps = ScreenInstructions.first().props();

      const {instructionProps} = defaultProps.screenInstructionsProps;

      expect(ScreenInstructionProps).toHaveProperty('content', instructionProps.content);
      expect(ScreenInstructionProps).toHaveProperty('type', instructionProps.type);
      expect(ScreenInstructionProps).toHaveProperty('testID', instructionProps.testID);
    });
    test('should pass the following props to the screen instructions body component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const bodyComponent = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BODY_TEST_ID');

      const bodyComponentProps = bodyComponent.first().props();

      const {bodyProps} = defaultProps.screenInstructionsProps;

      expect(bodyComponentProps).toHaveProperty('content', bodyProps.content);
      expect(bodyComponentProps).toHaveProperty('type', bodyProps.type);
      expect(bodyComponentProps).toHaveProperty('testID', bodyProps.testID);
    });
    test('should pass the following props to the login cluster caption component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const loginClusterComponent = wrapper.findWhere((node) => node.prop('testID') === 'TEST_CAPTION_TEST_ID');

      const loginClusterComponentProps = loginClusterComponent.first().props();

      const {captionProps} = defaultProps.loginClusterProps;

      expect(loginClusterComponentProps).toHaveProperty('content', captionProps.content);
      expect(loginClusterComponentProps).toHaveProperty('type', captionProps.type);
      expect(loginClusterComponentProps).toHaveProperty('testID', captionProps.testID);
    });

    test('should pass the navigation prop to the login cluster component', () => {
      const wrapper = mount(<Guest_Welcome {...defaultProps} />);
      const loginClusterComponent = wrapper.findWhere((node) => node.prop('testID') === 'TEST_LOGIN_CLUSTER_TEST_ID');

      const loginClusterComponentProps = loginClusterComponent.first().props();

      expect(loginClusterComponentProps).toHaveProperty('navigation', defaultProps.navigation);
    });
  });
});
