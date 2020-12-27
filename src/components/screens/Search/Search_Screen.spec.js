import React from 'react';
import {shallow} from 'enzyme';
import Search_Screen from './Search_Screen';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Search_Screen>', () => {
  describe('<Render>', () => {
    test('should render a search bar', () => {
      const wrapper = shallow(<Search_Screen {...defaultProps} />);
      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search-SearchBar');

      expect(SearchBar).toExist();
    });
  });
});
