import React from 'react';
import {shallow} from 'enzyme';
import Title from './Title';

const defaultProps = {
  title: 'TEST_TITLE',
  accessible: true,
  accessibilityLabel: 'TEST_LABEL',
  accessibilityHint: 'TEST_HINT',
  testID: 'TEST_TITLE_TEST_ID',
};

describe('<Title>', () => {
  describe('<Render>', () => {
    test('should render a Title component', () => {
      const wrapper = shallow(<Title {...defaultProps} />);
      const SearchBarTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_TITLE_TEST_ID');

      expect(SearchBarTitle).toExist();
    });
    test('should render a text component', () => {
      const wrapper = shallow(<Title {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'Title-Text');

      expect(TitleText).toExist();
    });
    test('should render a text component with the text passed in as title prop', () => {
      const wrapper = shallow(<Title {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'Title-Text');

      expect(TitleText.props().children).toBe(defaultProps.title);
    });
  });

  describe('<Accessability>', () => {
    test('should have the following accessibity props', () => {
      const wrapper = shallow(<Title {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'Title-Text');

      const TitleTextProps = TitleText.props();

      expect(TitleTextProps).toHaveProperty('accessible', defaultProps.accessible);
      expect(TitleTextProps).toHaveProperty('accessibilityLabel', defaultProps.accessibilityLabel);
      expect(TitleTextProps).toHaveProperty('accessibilityHint', defaultProps.accessibilityHint);
      expect(TitleTextProps).toHaveProperty('accessibilityRole', 'text');
    });
  });
});
