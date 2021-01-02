import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Text from './Text';

const instructionProps = {
  content: 'Start searching',
  type: 'Instruction',
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

const titleProps = {
  content: 'Profile & Settings',
  type: 'Title',
  testID: 'TEST_CAPTION_TEXT',
};

const menuTitleProps = {
  content: 'General',
  type: 'MenuTitle',
  testID: 'TEST_CAPTION_TEXT',
};

storiesOf('Design System/Atoms/Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text_Instruction', () => <Text {...instructionProps} />)
  .add('Text_Body', () => <Text {...bodyProps} />)
  .add('Text_Caption', () => <Text {...captionProps} />)
  .add('Text_Title', () => <Text {...titleProps} />)
  .add('Text_MenuTitle', () => <Text {...menuTitleProps} />);
