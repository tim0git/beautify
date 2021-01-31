import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Terms_Conditions_Screen from './Profile_Terms_Conditions_Screen';

const defaultProps = {};

storiesOf('Design System/Screens/Profile_Terms_Conditions', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Terms_Conditions_Default', () => <Profile_Terms_Conditions_Screen {...defaultProps} />);
