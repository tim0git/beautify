import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Help_Centre_Screen from './Profile_Help_Centre_Screen';

const defaultProps = {};

storiesOf('Profile_Help_Centre_Screen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Help_Centre_Screen_Default', () => <Profile_Help_Centre_Screen {...defaultProps} />);
