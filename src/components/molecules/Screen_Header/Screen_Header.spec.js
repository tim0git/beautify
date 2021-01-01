import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Screen_Header from './Screen_Header';

const defaultProps = {
  screenTitle: 'TEST_SCREEN_TITLE',
};

describe('<Screen_Header />', () => {
  describe('<Render>', () => {
    test('should render a Screen Header Component', () => {
      const wrapper = shallow(<Screen_Header {...defaultProps} />);

      const ScreenHeader = wrapper.findWhere((node) => node.prop('testID') === 'Screen_Header');

      expect(ScreenHeader).toExist();
    });
  });
});
