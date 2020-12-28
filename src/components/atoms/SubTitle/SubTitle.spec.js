import React from 'react';
import {shallow} from 'enzyme';
import SubTitle from './SubTitle';

const defaultProps = {
  subTitle: 'TEST_TITLE',
  accessible: true,
  accessibilityLabel: 'TEST_LABEL',
  accessibilityHint: 'TEST_HINT',
  testID: 'TEST_TITLE_TEST_ID',
};

describe('<SubTitle>', () => {
  describe('<Render>', () => {
    test('should render a SubTitle component', () => {
      const wrapper = shallow(<SubTitle {...defaultProps} />);
      const SearchBarTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_TITLE_TEST_ID');

      expect(SearchBarTitle).toExist();
    });
    test('should render a text component', () => {
      const wrapper = shallow(<SubTitle {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'SubTitle-Text');

      expect(TitleText).toExist();
    });
    test('should render a text component with the text passed in as subTitle prop', () => {
      const wrapper = shallow(<SubTitle {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'SubTitle-Text');

      expect(TitleText.props().children).toBe(defaultProps.subTitle);
    });
  });

  describe('<Accessability>', () => {
    test('should have the following accessibity props', () => {
      const wrapper = shallow(<SubTitle {...defaultProps} />);
      const SubTitleText = wrapper.findWhere((node) => node.prop('testID') === 'SubTitle-Text');

      const SubTitleTextProps = SubTitleText.props();

      expect(SubTitleTextProps).toHaveProperty('accessible', defaultProps.accessible);
      expect(SubTitleTextProps).toHaveProperty('accessibilityLabel', defaultProps.accessibilityLabel);
      expect(SubTitleTextProps).toHaveProperty('accessibilityHint', defaultProps.accessibilityHint);
      expect(SubTitleTextProps).toHaveProperty('accessibilityRole', 'text');
    });
  });
});
