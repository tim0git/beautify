/* eslint-disable no-alert */
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Search_Bar from './Search_Bar';

const defaultProps = {
  placeHolder: 'place holder',
  onChangeText: () => {},
  onPress: () => {
    alert('Pressed Cancel!');
  },
  keyboardType: 'default',
};

storiesOf('Search_Bar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Search_Bar_Default', () => <Search_Bar {...defaultProps} />);
