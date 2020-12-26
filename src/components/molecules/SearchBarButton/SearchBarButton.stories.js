/* eslint-disable no-alert */
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import SearchBarButton from './SearchBarButton';

const defaultProps = {
  title: 'TEST TITLE',
  type: 'default',
  onPress: () => {
    alert('Pressed!');
  },
  accessible: true,
  accessibilityLabel: 'TEST A11Y LABEL',
  accessibilityHint: 'TEST A11Y HINT',
  accessibilityRole: 'button',
  disabled: false,
  testID: 'TEST_ID',
};

storiesOf('SearchBarButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SearchBarButton', () => <SearchBarButton {...defaultProps} />);
