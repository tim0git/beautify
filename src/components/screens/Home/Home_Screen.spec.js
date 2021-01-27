import React from 'react';
import {mount} from 'enzyme';
import Home_Screen from './Home_Screen';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Home_Screen>', () => {
  describe('<Render>', () => {
    test('should render a Search Bar Button', () => {
      const wrapper = mount(<Home_Screen {...defaultProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'Home_SearchBarButton');

      expect(SearchBarButton).toExist();
    });
  });
  describe('<Props>', () => {
    test('Search Bar Button should recieve the following props', () => {
      const wrapper = mount(<Home_Screen {...defaultProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'Home_SearchBarButton');

      const SearchBarButtonProps = SearchBarButton.first().props();

      expect(SearchBarButtonProps).toHaveProperty('title');
      expect(SearchBarButtonProps).toHaveProperty('type');
      expect(SearchBarButtonProps).toHaveProperty('iconLeft');
      expect(SearchBarButtonProps).toHaveProperty('accessible');
      expect(SearchBarButtonProps).toHaveProperty('accessibilityLabel');
      expect(SearchBarButtonProps).toHaveProperty('accessibilityHint');
      expect(SearchBarButtonProps).toHaveProperty('accessibilityRole');
      expect(SearchBarButtonProps).toHaveProperty('disabled');
      expect(SearchBarButtonProps).toHaveProperty('onPress');
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.clearAllMocks;
    });

    test('should call navigate when Search Bar Button is pressed', () => {
      const wrapper = mount(<Home_Screen {...defaultProps} />);

      wrapper.instance();

      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'Home_SearchBarButton');

      SearchBarButton.first().props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test('should call navigate with the string "Search_Screen"', () => {
      const wrapper = mount(<Home_Screen {...defaultProps} />);

      wrapper.instance();

      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'Home_SearchBarButton');

      SearchBarButton.first().props().onPress();

      expect(defaultProps.navigation.navigate).toHaveBeenCalledWith('Search_Screen');
    });
  });
});
