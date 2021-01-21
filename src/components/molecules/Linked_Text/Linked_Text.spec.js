import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Linked_Text from './Linked_Text';
import {Linking} from 'react-native';
import * as RootNavigation from '../../../RootNavigation';

const singleLinkedSentanceProps = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'URL',
  link: 'https://www.google.com',
  testID: '',
};

const doubleSentanceSingleLinkProps = {
  content: 'Hello World. I am a double sentance with a single link',
  textToLink: 'World',
  type: 'URL',
  link: 'https://www.google.com',
  testID: '',
};

const urlLinkedSentance = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'URL',
  link: 'https://test_url_linking',
  testID: '',
};

const navigationLinkedSentance = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'NAVIGATION',
  link: 'TEST_ROUTE',
  testID: '',
};

describe('<Linked_Text />', () => {
  describe('<Render>', () => {
    test('should render a linked text compoenent', () => {
      const wrapper = shallow(<Linked_Text {...singleLinkedSentanceProps} />);
      const linkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text');
      expect(linkedText).toExist();
    });

    describe('<Render> - single sentance', () => {
      test('should render a single linked sentance', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentanceProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');
        const textAfterLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_After_Link');
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentance');
        expect(linkedTextText).toExist();
        expect(textAfterLink).toExist();
        expect(textBeforeLink).toExist();
        expect(nonLinkedText).not.toExist();
      });
      test('should render Hello', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentanceProps} />);
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');

        expect(textBeforeLink.props().children).toBe('Hello ');
      });
      test('should render World', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentanceProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');

        expect(linkedTextText.props().children).toBe('World');
      });
    });
    describe('<Render> - double sentance', () => {
      test('should render a single linked sentance and a non linked sentance', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentanceSingleLinkProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');
        const textAfterLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_After_Link');
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentance');
        expect(linkedTextText).toExist();
        expect(textAfterLink).toExist();
        expect(textBeforeLink).toExist();
        expect(nonLinkedText).toExist();
      });
      test('should render Hello', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentanceSingleLinkProps} />);
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');

        expect(textBeforeLink.props().children).toBe('Hello ');
      });
      test('should render World', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentanceSingleLinkProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');

        expect(linkedTextText.props().children).toBe('World');
      });
      test('should render a non linked sentance " I am a double sentance with a single link."', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentanceSingleLinkProps} />);
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentance');

        expect(nonLinkedText.props().children).toBe(' I am a double sentance with a single link.');
      });
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('when type is URL it should call Linking with the link passed in.', () => {
      const mockOpenURL = jest.fn();
      jest.spyOn(Linking, 'openURL').mockImplementationOnce(mockOpenURL);
      const wrapper = shallow(<Linked_Text {...urlLinkedSentance} />);
      const linkedTextPressable = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Pressable');

      linkedTextPressable.props().onPress();

      expect(mockOpenURL).toHaveBeenCalledTimes(1);
      expect(mockOpenURL).toHaveBeenLastCalledWith(urlLinkedSentance.link);
    });
    test('when type is NAVIGATION it should call Navigation with the link passed in', () => {
      const mockNavigate = jest.fn();
      jest.spyOn(RootNavigation, 'navigate').mockImplementationOnce(mockNavigate);
      const wrapper = shallow(<Linked_Text {...navigationLinkedSentance} />);
      const linkedTextPressable = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Pressable');

      linkedTextPressable.props().onPress();

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenLastCalledWith(navigationLinkedSentance.link);
    });
  });
});
