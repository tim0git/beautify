import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Title from './Title';

const defaultProps = {
  title: 'Start searching',
  accessible: true,
  accessibilityLabel: 'TEST A11Y LABEL',
  accessibilityHint: 'TEST A11Y HINT',
  accessibilityRole: 'text',
  testID: 'TEST_ID',
};

storiesOf('Title', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Title_Default', () => <Title {...defaultProps} />);
