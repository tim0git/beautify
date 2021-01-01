import React from 'react';
import {shallow} from 'enzyme';
import Screen_Instructions from './Screen_Instructions';

const defaultProps = {
  instructionProps: {
    instruction: 'Start searching',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST_INSTRUCTION_TEST_ID',
  },
  bodyProps: {
    body: 'Browse by catergory or by practitioner',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST_BODY_TEST_ID',
  },
};

const bodyOnlyProps = {
  bodyProps: defaultProps.bodyProps,
};

const instructionOnlyProps = {
  instructionProps: defaultProps.instructionProps,
};

describe('<Screen_Instructions>', () => {
  describe('<Render>', () => {
    test('should render a Instruction component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsInstruction = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_INSTRUCTION_TEST_ID',
      );

      expect(ScreenInstructionsInstruction).toExist();
    });
    test('should NOT render a Instruction component when the instruction prop is ommitted', () => {
      const wrapper = shallow(<Screen_Instructions {...bodyOnlyProps} />);
      const ScreenInstructionsInstruction = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_INSTRUCTION_TEST_ID',
      );

      expect(ScreenInstructionsInstruction).not.toExist();
    });
    test('should render a Body component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsBody = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BODY_TEST_ID');

      expect(ScreenInstructionsBody).toExist();
    });
    test('should NOT render a Body component when the bodyProps is omitted', () => {
      const wrapper = shallow(<Screen_Instructions {...instructionOnlyProps} />);
      const ScreenInstructionsBody = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BODY_TEST_ID');

      expect(ScreenInstructionsBody).not.toExist();
    });
    test('should pass instruction props to Instruction component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsInstruction = wrapper.findWhere(
        (node) => node.prop('testID') === 'TEST_INSTRUCTION_TEST_ID',
      );

      expect(ScreenInstructionsInstruction.props()).toEqual(defaultProps.instructionProps);
    });
    test('should pass body props to Body component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsBody = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BODY_TEST_ID');

      expect(ScreenInstructionsBody.props()).toEqual(defaultProps.bodyProps);
    });
  });
});
