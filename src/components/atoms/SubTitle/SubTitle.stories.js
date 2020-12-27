import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import SubTitle from './SubTitle';

const defaultProps = {
  title: 'Browse by category or practitioner',
  accessible: true,
  accessibilityLabel: 'TEST A11Y LABEL',
  accessibilityHint: 'TEST A11Y HINT',
  accessibilityRole: 'text',
  testID: 'TEST_ID',
};

storiesOf('SubTitle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SubTitle_Default', () => <SubTitle {...defaultProps} />);
