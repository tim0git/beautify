import * as React from 'react';
import {shallow} from 'enzyme';
import Search_Bar from './Search_Bar';

const defaultProps = {
  onChange: jest.fn(),
  testID: '',
};

describe('<Search_Bar>', () => {
  describe('<Render>', () => {
    test('should render a search bar component', () => {
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar');

      expect(SearchBar).toExist();
    });
    test('should render a Cancel Button', () => {
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Button');

      expect(SearchBar).toExist();
    });
    test('should render a textInput Box', () => {
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Text_Input');

      expect(SearchBar).toExist();
    });
    test('should render a icon', () => {
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Icon');

      expect(SearchBar).toExist();
    });
  });
  describe('<Methods>', () => {
    test('should call onChange prop when a onChangeText event occours', () => {
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Text_Input');

      SearchBar.props().onChangeText();

      expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });
    test('should call onChange prop with the string passed to onChangeText', () => {
      const TEST_STRING = 'TEST_STRING';
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Text_Input');

      SearchBar.props().onChangeText(TEST_STRING);

      expect(defaultProps.onChange).toHaveBeenCalledWith(TEST_STRING);
    });

    test('should set state with the string passed to onChangeText when an event occours', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Test
       */
      const wrapper = shallow(<Search_Bar {...defaultProps} />);

      const TEST_STRING = 'TEST_STRING';

      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search_Bar_Text_Input');

      SearchBar.props().onChangeText(TEST_STRING);

      expect(setState).toHaveBeenCalledWith(TEST_STRING);

      jest.clearAllMocks();
    });
  });
});
