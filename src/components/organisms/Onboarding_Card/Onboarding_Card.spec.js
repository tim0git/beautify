import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Onboarding_Card from './Onboarding_Card';

const defaultProps = {
  title: 'TEST_TITLE',
  body: 'TEST_BODY',
  image: 'TEST_IMAGE',
};

describe('<Onboarding_Card />', () => {
  describe('<Render>', () => {
    test('should render a title component', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const title = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Title');
      expect(title).toExist();
    });
    test('should render a body component', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const body = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Body');
      expect(body).toExist();
    });
    test('should render a image component', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const image = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Image');
      expect(image).toExist();
    });
  });
  describe('<Props>', () => {
    test('should pass title prop to title component content prop', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const title = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Title');
      const titleProps = title.props();
      expect(titleProps).toHaveProperty('content', defaultProps.title);
    });
    test('should pass body prop to body component content prop', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const body = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Body');
      const bodyProps = body.props();
      expect(bodyProps).toHaveProperty('content', defaultProps.body);
    });
    test('should pass body prop to image component source: uri prop', () => {
      const wrapper = shallow(<Onboarding_Card {...defaultProps} />);
      const image = wrapper.findWhere((node) => node.prop('testID') === 'Onboarding_Card_Image');
      const imageProps = image.props();
      expect(imageProps).toHaveProperty('source', {uri: defaultProps.image});
    });
  });
});
