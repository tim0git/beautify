import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_About_Beautify_Screen from './Profile_About_Beautify_Screen';

const defaultProps = {};

storiesOf('Design System/Screens/Profile_About_Beautify', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Profile_About_Beautify_Screen', () => <Profile_About_Beautify_Screen {...defaultProps} />);
