import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Linked_Text from './Linked_Text';
import {Linking} from 'react-native';
import * as RootNavigation from '../../../RootNavigation';

const singleLinkedSentenceProps = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'URL',
  link: 'https://www.google.com',
  testID: '',
};

const doubleSentenceSingleLinkProps = {
  content: 'Hello World. I am a double sentence with a single link',
  textToLink: 'World',
  type: 'URL',
  link: 'https://www.google.com',
  testID: '',
};

const urlLinkedSentence = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'URL',
  link: 'https://test_url_linking',
  testID: '',
};

const navigationLinkedSentence = {
  content: 'Hello World',
  textToLink: 'World',
  type: 'NAVIGATION',
  link: 'TEST_ROUTE',
  testID: '',
};

describe('<Linked_Text />', () => {
  describe('<Render>', () => {
    test('should render a linked text component', () => {
      const wrapper = shallow(<Linked_Text {...singleLinkedSentenceProps} />);
      const linkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text');
      expect(linkedText).toExist();
    });

    describe('<Render> - single sentence', () => {
      test('should render a single linked sentence', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentenceProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');
        const textAfterLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_After_Link');
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentence');
        expect(linkedTextText).toExist();
        expect(textAfterLink).toExist();
        expect(textBeforeLink).toExist();
        expect(nonLinkedText).not.toExist();
      });
      test('should render Hello', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentenceProps} />);
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');

        expect(textBeforeLink.props().children).toBe('Hello ');
      });
      test('should render World', () => {
        const wrapper = shallow(<Linked_Text {...singleLinkedSentenceProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');

        expect(linkedTextText.props().children).toBe('World');
      });
    });
    describe('<Render> - double sentence', () => {
      test('should render a single linked sentence and a non linked sentence', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentenceSingleLinkProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');
        const textAfterLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_After_Link');
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentence');
        expect(linkedTextText).toExist();
        expect(textAfterLink).toExist();
        expect(textBeforeLink).toExist();
        expect(nonLinkedText).toExist();
      });
      test('should render Hello', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentenceSingleLinkProps} />);
        const textBeforeLink = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Before_Link');

        expect(textBeforeLink.props().children).toBe('Hello ');
      });
      test('should render World', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentenceSingleLinkProps} />);
        const linkedTextText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text');

        expect(linkedTextText.props().children).toBe('World');
      });
      test('should render a non linked sentence " I am a double sentence with a single link."', () => {
        const wrapper = shallow(<Linked_Text {...doubleSentenceSingleLinkProps} />);
        const nonLinkedText = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Non_Linked_Sentence');

        expect(nonLinkedText.props().children).toBe(' I am a double sentence with a single link.');
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
      const wrapper = shallow(<Linked_Text {...urlLinkedSentence} />);
      const linkedTextPressable = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Pressable');

      linkedTextPressable.props().onPress();

      expect(mockOpenURL).toHaveBeenCalledTimes(1);
      expect(mockOpenURL).toHaveBeenLastCalledWith(urlLinkedSentence.link);
    });
    test('when type is NAVIGATION it should call Navigation with the link passed in', () => {
      const mockNavigate = jest.fn();
      jest.spyOn(RootNavigation, 'navigate').mockImplementationOnce(mockNavigate);
      const wrapper = shallow(<Linked_Text {...navigationLinkedSentence} />);
      const linkedTextPressable = wrapper.findWhere((node) => node.prop('testID') === 'Linked_Text_Text_Pressable');

      linkedTextPressable.props().onPress();

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenLastCalledWith(navigationLinkedSentence.link);
    });
  });
});
