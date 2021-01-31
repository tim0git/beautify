import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Privacy_Policy_Screen from './Profile_Privacy_Policy_Screen';

const defaultProps = {};

storiesOf('Design System/Screens/Profile_Privacy_Policy', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Privacy_Policy_Default', () => <Profile_Privacy_Policy_Screen {...defaultProps} />);
