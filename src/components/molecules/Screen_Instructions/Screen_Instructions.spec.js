import React from 'react';
import {shallow} from 'enzyme';
import Screen_Instructions from './Screen_Instructions';

const defaultProps = {
  titleProps: {
    title: 'Start searching',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST_TITLE_TEST_ID',
  },
  subTitleProps: {
    subTitle: 'Browse by catergory or by practitioner',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST_SUB_TITLE_TEST_ID',
  },
};

describe('<Screen_Instructions>', () => {
  describe('<Render>', () => {
    test('should render a Title component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_TITLE_TEST_ID');

      expect(ScreenInstructionsTitle).toExist();
    });
    test('should render a SubTitle component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsSubTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SUB_TITLE_TEST_ID');

      expect(ScreenInstructionsSubTitle).toExist();
    });
    test('should pass title props to Title component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_TITLE_TEST_ID');

      expect(ScreenInstructionsTitle.props()).toEqual(defaultProps.titleProps);
    });
    test('should pass subTitle props to SubTitle component', () => {
      const wrapper = shallow(<Screen_Instructions {...defaultProps} />);
      const ScreenInstructionsSubTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SUB_TITLE_TEST_ID');

      expect(ScreenInstructionsSubTitle.props()).toEqual(defaultProps.subTitleProps);
    });
  });
});