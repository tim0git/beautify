import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Calendar from './Calendar';

const defaultProps = {};

storiesOf('Calendar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Calendar_Default', () => <Calendar {...defaultProps} />);
