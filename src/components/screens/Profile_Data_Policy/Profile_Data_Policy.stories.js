import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_Data_Policy_Screen from './Profile_Data_Policy_Screen';

const defaultProps = {};

storiesOf('Profile_Data_Policy', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_Data_Policy_Default', () => <Profile_Data_Policy_Screen {...defaultProps} />);
