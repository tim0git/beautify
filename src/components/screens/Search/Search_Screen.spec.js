import React from 'react';
import {mount} from 'enzyme';
import {MockedProvider} from '@apollo/client/testing';
import Search_Screen from './Search_Screen';

const mocks = [];

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Search_Screen>', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  describe('<Render>', () => {
    test('should render a search bar', () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Search_Screen {...defaultProps} />
        </MockedProvider>,
      );
      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search-SearchBar');

      expect(SearchBar).toExist();
    });
    test('should render a screen placeHolder', () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Search_Screen {...defaultProps} />
        </MockedProvider>,
      );
      const SearchBar = wrapper.findWhere((node) => node.prop('testID') === 'Search-ScreenPlaceHolder');

      expect(SearchBar).toExist();
    });
  });
});
