import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Insurance_Screen from './Profile_Insurance_Screen';

const defaultProps = {};

storiesOf('Profile_Insurance', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Insurance_Default', () => <Profile_Insurance_Screen {...defaultProps} />);
