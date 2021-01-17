import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Notifications_Screen from './Profile_Notifications_Screen';

const defaultProps = {};

storiesOf('Design System/Screens/Profile_Notifications', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Notifications_Default', () => <Profile_Notifications_Screen {...defaultProps} />);
