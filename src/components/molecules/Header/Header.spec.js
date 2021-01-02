import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Header from './Header';
import {ThemeProvider} from '../../../services/ThemeProvider';
const {
  config: {screenHeaderTextProps},
} = ThemeProvider('Header');

const defaultProps = {
  headerText: 'TEST_SCREEN_TITLE',
  testID: 'TEST_SCREEN_HEADER',
};

describe('<Header />', () => {
  describe('<Render>', () => {
    test('should render a Screen Header Component', () => {
      const wrapper = shallow(<Header {...defaultProps} />);

      const ScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'TEST_SCREEN_HEADER');

      expect(ScreenHeader).toExist();
    });
    test('should render a Text Component Component', () => {
      const wrapper = shallow(<Header {...defaultProps} />);

      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);

      expect(ScreenHeaderText).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass the following props to Text component', () => {
      const wrapper = shallow(<Header {...defaultProps} />);

      const ScreenHeaderText = wrapper.findWhere((node) => node.prop('testID') === screenHeaderTextProps.testID);
      const ScreenHeaderTextProps = ScreenHeaderText.props();
      expect(ScreenHeaderTextProps).toHaveProperty('type', screenHeaderTextProps.type);
      expect(ScreenHeaderTextProps).toHaveProperty('testID', screenHeaderTextProps.testID);
    });
  });
});
