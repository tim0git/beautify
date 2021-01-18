import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow, render, mount} from 'enzyme';
import Default_Screen_Template from './Default_Screen_Template';

const defaultProps = {
  screenTitle: 'Default Screen Template',
  render: undefined,
  backButton: true,
  testID: '',
};

describe('<Default_Screen />', () => {
  test('should render a default screen template', () => {
    const wrapper = shallow(<Default_Screen_Template {...defaultProps} />);

    const defaultScreenTemplate = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template');

    expect(defaultScreenTemplate).toExist();
  });
});
