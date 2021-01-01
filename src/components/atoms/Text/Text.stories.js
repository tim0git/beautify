import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Text from './Text';

const instructionProps = {
  content: 'Start searching',
  type: 'Title',
  testID: 'TEST_TITLE',
};

const bodyProps = {
  content: "Hey! It looks like you're new here. Once you've booked a treatment, all your info will be found here.",
  type: 'Body',
  testID: 'TEST_BODY_TEXT',
};

const captionProps = {
  content: 'If you already have an account',
  type: 'Caption',
  testID: 'TEST_CAPTION_TEXT',
};

const screenTitleProps = {
  content: 'Profile & Settings',
  type: 'ScreenTitle',
  testID: 'TEST_CAPTION_TEXT',
};

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text_Instruction', () => <Text {...instructionProps} />)
  .add('Text_Body', () => <Text {...bodyProps} />)
  .add('Text_Caption', () => <Text {...captionProps} />)
  .add('Text_Screen_Title', () => <Text {...screenTitleProps} />);
