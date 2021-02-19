import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

const defaultProps = {
  title: 'TEST_TITLE',
  type: 'default',
  iconLeft: false,
  onPress: jest.fn(),
  accessible: true,
  accessibilityLabel: 'TEST_LABEL',
  accessibilityHint: 'TEST_HINT',
  disabled: false,
  testID: 'TEST_BUTTON_TEST_ID',
};

const searchBarProps = {
  ...defaultProps,
  type: 'SearchBar',
  iconLeft: true,
};

const disabledProps = {
  ...defaultProps,
  disabled: true,
};

const primaryProps = {
  ...defaultProps,
  type: 'Primary',
  iconRight: true,
};

const secondaryProps = {
  ...defaultProps,
  type: 'Secondary',
  iconRight: true,
};

const headerBackButtonProps = {
  ...defaultProps,
  title: undefined,
  type: 'HeaderBackButton',
};

describe('<Button>', () => {
  describe('<Render> -default', () => {
    test('should render a touchable component', () => {
      const wrapper = shallow(<Button {...defaultProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      expect(SearchBarButton).toExist();
    });
    test('should render a text component', () => {
      const wrapper = shallow(<Button {...defaultProps} />);
      const ButtonText = wrapper.findWhere((node) => node.prop('testID') === 'Button-Text');

      expect(ButtonText).toExist();
    });
    test('should render a text component with the text passed in as title prop', () => {
      const wrapper = shallow(<Button {...defaultProps} />);
      const ButtonText = wrapper.findWhere((node) => node.prop('testID') === 'Button-Text');

      expect(ButtonText.props().children).toBe(defaultProps.title);
    });
  });

  describe('<Render> -SearchBar', () => {
    test('should render a touchable component', () => {
      const wrapper = shallow(<Button {...searchBarProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      expect(SearchBarButton).toExist();
    });
    test('should render a icon Left component', () => {
      const wrapper = shallow(<Button {...searchBarProps} />);
      const ButtonIconLeft = wrapper.findWhere((node) => node.prop('testID') === 'Button-IconLeft');

      expect(ButtonIconLeft).toExist();
    });
  });

  describe('<Render> -Primary', () => {
    test('should render a touchable component', () => {
      const wrapper = shallow(<Button {...primaryProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      expect(SearchBarButton).toExist();
    });
    test('should render a icon Right component', () => {
      const wrapper = shallow(<Button {...primaryProps} />);
      const ButtonIconRight = wrapper.findWhere((node) => node.prop('testID') === 'Button-IconRight');

      expect(ButtonIconRight).toExist();
    });
  });

  describe('<Render> -Secondary', () => {
    test('should render a touchable component', () => {
      const wrapper = shallow(<Button {...secondaryProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      expect(SearchBarButton).toExist();
    });
    test('should render a icon Right component', () => {
      const wrapper = shallow(<Button {...secondaryProps} />);
      const ButtonIconRight = wrapper.findWhere((node) => node.prop('testID') === 'Button-IconRight');

      expect(ButtonIconRight).toExist();
    });
  });

  describe('<Render> -HeaderBackButton', () => {
    test('should render a touchable component', () => {
      const wrapper = shallow(<Button {...headerBackButtonProps} />);
      const button = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      expect(button).toExist();
    });
    test('should render a back button icon component', () => {
      const wrapper = shallow(<Button {...headerBackButtonProps} />);
      const BackButton = wrapper.findWhere((node) => node.prop('testID') === 'Button_Back_Button_Icon');

      expect(BackButton).toExist();
    });
    test('should NOT render the following; iconLeft, iconRight, title', () => {
      const wrapper = shallow(<Button {...headerBackButtonProps} />);
      const IconLeft = wrapper.findWhere((node) => node.prop('testID') === 'Button-IconLeft');
      const ButtonText = wrapper.findWhere((node) => node.prop('testID') === 'Button-Text');
      const IconRight = wrapper.findWhere((node) => node.prop('testID') === 'Button-IconRight');

      expect(IconLeft).not.toExist();
      expect(ButtonText).not.toExist();
      expect(IconRight).not.toExist();
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      defaultProps.onPress.mockReset();
    });

    test('should call onPress passed as a prop when Button is pressed', () => {
      const wrapper = shallow(<Button {...defaultProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      wrapper.instance();

      SearchBarButton.props().onPress();

      expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
    });

    test('should not call onPress passed as a prop when disabled is passed as a prop', () => {
      const wrapper = shallow(<Button {...disabledProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      wrapper.instance();

      SearchBarButton.props().onPress();

      expect(defaultProps.onPress).toHaveBeenCalledTimes(0);
    });
  });

  describe('<Accessability>', () => {
    test('should have the following accessibility props', () => {
      const wrapper = shallow(<Button {...defaultProps} />);
      const SearchBarButton = wrapper.findWhere((node) => node.prop('testID') === 'TEST_BUTTON_TEST_ID');

      const SearchBarProps = SearchBarButton.props();

      expect(SearchBarProps).toHaveProperty('accessible', defaultProps.accessible);
      expect(SearchBarProps).toHaveProperty('accessibilityLabel', defaultProps.accessibilityLabel);
      expect(SearchBarProps).toHaveProperty('accessibilityHint', defaultProps.accessibilityHint);
      expect(SearchBarProps).toHaveProperty('accessibilityRole', 'button');
    });
  });
});
