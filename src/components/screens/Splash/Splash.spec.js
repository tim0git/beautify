import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Splash from './Splash';

describe('<Splash />', () => {
  describe('<Render>', () => {
    test('should render a splash screen', () => {
      const wrapper = shallow(<Splash />);
      const splashScreen = wrapper.findWhere((node) => node.prop('testID') === 'Splash');
      expect(splashScreen).toExist();
    });
    test('should render a splash text component', () => {
      const wrapper = shallow(<Splash />);
      const splashScreenText = wrapper.findWhere((node) => node.prop('testID') === 'Splash_Text');
      expect(splashScreenText).toExist();
    });
    test('should render a splash icon component', () => {
      const wrapper = shallow(<Splash />);
      const splashScreenIcon = wrapper.findWhere((node) => node.prop('testID') === 'Splash_Icon');
      expect(splashScreenIcon).toExist();
    });
  });
});
