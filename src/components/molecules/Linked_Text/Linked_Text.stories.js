import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Linked_Text from './Linked_Text';

const defaultProps = {
  content:
    'Here you can choose how you want to be contacted regarding marketing, promotions and news. We can tailor them, based on your data. Read more about our privacy policy here',
  textToLink: 'privacy policy',
  link: 'url',
  type: 'Body',
};

const singleSentenceProps = {
  content: 'This is a single sentence with a deep link',
  textToLink: 'deep link',
  link: 'url',
  type: 'Body',
};

const doubleSentencesProps = {
  content: 'This is a double sentence with a deep link. The link is in the first sentence',
  textToLink: 'deep link',
  link: 'url',
  type: 'Body',
};

storiesOf('Design System/Molecule/Linked_Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Linked_Text_Single_Sentence', () => <Linked_Text {...singleSentenceProps} />)
  .add('Linked_Text_Double_Sentence', () => <Linked_Text {...doubleSentencesProps} />)
  .add('Linked_Text_Default', () => <Linked_Text {...defaultProps} />);
