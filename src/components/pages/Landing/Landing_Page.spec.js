import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';

import Landing_Page from './Landing_Page';

describe('<Landing_Page>', () => {
  describe('<Render>', () => {
    test('should have a Page_Title', () => {
      const wrapper = shallow(<Landing_Page />);

      const pageTitle = wrapper.findWhere(
        (node) => node.prop('testID') === 'Landing_Page-Page_Title',
      );

      expect(pageTitle).toExist();
    });
  });
});
