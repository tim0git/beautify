import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Legal_Stuff_Screen from './Profile_Legal_Stuff_Screen';

const defaultProps = {};

storiesOf('Profile_Legal_Stuff', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Legal_Stuff_Default', () => <Profile_Legal_Stuff_Screen {...defaultProps} />);
