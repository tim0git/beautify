import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Marketing_Screen from './Profile_Marketing_Screen';

const defaultProps = {};

storiesOf('Design System/Screens/Profile_Marketing', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Marketing_Default', () => <Profile_Marketing_Screen {...defaultProps} />);
