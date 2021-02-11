import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import {Text} from 'react-native';
import Default_Screen_Template from './Default_Screen_Template';

const defaultProps = {
  screenTitle: 'Default Screen Template',
  render: <Text testID="Default_Screen_Template_Content">Test jsx</Text>,
  backButton: true,
  testID: '',
};

const loadingProps = {
  ...defaultProps,
  isLoading: true,
};

const noHeaderProps = {
  ...defaultProps,
  showHeader: false,
};

describe('<Default_Screen />', () => {
  describe('<Render>', () => {
    test('should render a default screen template', () => {
      const wrapper = shallow(<Default_Screen_Template {...defaultProps} />);

      const Template = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template');

      expect(Template).toExist();
    });
    test('should NOT render a loading component if isLoading is false', () => {
      const wrapper = shallow(<Default_Screen_Template {...defaultProps} />);

      const Loading = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Loading');

      expect(Loading).not.toExist();
    });
    test('should render a loading component when isLoading is true', () => {
      const wrapper = shallow(<Default_Screen_Template {...loadingProps} />);

      const Loading = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Loading');

      expect(Loading).toExist();
    });
    test('should NOT render content when isLoading is true', () => {
      const wrapper = shallow(<Default_Screen_Template {...defaultProps} />);

      const TemplateContent = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Content');

      expect(TemplateContent).toExist();
    });
    test('should render a Screen Header by default', () => {
      const wrapper = shallow(<Default_Screen_Template {...defaultProps} />);

      const header = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Screen_Header');

      expect(header).toExist();
    });
    test('should NOT render a Screen Header when showHeader prop is false', () => {
      const wrapper = shallow(<Default_Screen_Template {...noHeaderProps} />);

      const header = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Screen_Header');

      expect(header).not.toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass headerRHSButtonAction prop to Header component', () => {
      const mockHeaderRHSButtonAction = jest.fn();
      const wrapper = shallow(
        <Default_Screen_Template {...defaultProps} headerRHSButtonAction={mockHeaderRHSButtonAction} />,
      );
      const header = wrapper.findWhere((node) => node.prop('testID') === 'Default_Screen_Template_Screen_Header');

      const headerProps = header.props();
      expect(headerProps).toHaveProperty('headerRHSButtonAction', mockHeaderRHSButtonAction);
    });
  });
});
