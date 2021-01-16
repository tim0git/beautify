import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Notification_Settings_Screen from './Notification_Settings_Screen';

const defaultProps = {};

storiesOf('Notification_Settings', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Notification_Settings_Default', () => <Notification_Settings_Screen {...defaultProps} />);
