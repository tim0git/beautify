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

const singleSentanceProps = {
  content: 'This is a single sentance with a deep link',
  textToLink: 'deep link',
  link: 'url',
  type: 'Body',
};

const doubleSentancesProps = {
  content: 'This is a double sentance with a deep link. The link is in the first sentance',
  textToLink: 'deep link',
  link: 'url',
  type: 'Body',
};

storiesOf('Design System/Molecule/Linked_Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Linked_Text_Single_Sentance', () => <Linked_Text {...singleSentanceProps} />)
  .add('Linked_Text_Double_Sentance', () => <Linked_Text {...doubleSentancesProps} />)
  .add('Linked_Text_Default', () => <Linked_Text {...defaultProps} />);
