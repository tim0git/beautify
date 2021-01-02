import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
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
  },
  loginClusterProps: {
    captionProps: {
      content: 'TEST_CAPTION_CONTENT',
      type: 'default',
      testID: 'TEST_CAPTION_TEST_ID',
    },
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
  });
});
