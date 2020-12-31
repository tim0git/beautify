import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Text from './Text';

const defaultProps = {
  content: 'TEST_TITLE',
  type: 'default',
  testID: 'TEST_TEXT_TEST_ID',
};

describe('<Text />', () => {
  describe('<Render>', () => {
    test('should render a Text component wrapper', () => {
      const wrapper = shallow(<Text {...defaultProps} />);
      const SearchBarTitle = wrapper.findWhere((node) => node.prop('testID') === 'TEST_TEXT_TEST_ID');

      expect(SearchBarTitle).toExist();
    });
    test('should render a text component', () => {
      const wrapper = shallow(<Text {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'Text-Text');

      expect(TitleText).toExist();
    });
    test('should render a text component with the text passed in as content prop', () => {
      const wrapper = shallow(<Text {...defaultProps} />);
      const TitleText = wrapper.findWhere((node) => node.prop('testID') === 'Text-Text');

      expect(TitleText.props().children).toBe(defaultProps.content);
    });
  });
  describe('<Accessability>', () => {
    test('should have the following accessibity props', () => {
      const wrapper = shallow(<Text {...defaultProps} />);
      const SubTitleText = wrapper.findWhere((node) => node.prop('testID') === 'Text-Text');
      const SubTitleTextProps = SubTitleText.props();
      expect(SubTitleTextProps).toHaveProperty('accessibilityRole', 'text');
    });
  });
});
