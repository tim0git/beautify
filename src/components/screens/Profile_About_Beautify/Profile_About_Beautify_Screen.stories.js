import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Profile_About_Beautify_Screen from './Profile_About_Beautify_Screen';

const defaultProps = {};

storiesOf('About_Beautify', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('About_Beautify_Default', () => <Profile_About_Beautify_Screen {...defaultProps} />);
