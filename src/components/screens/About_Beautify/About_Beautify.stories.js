import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import About_Beautify_Screen from './About_Beautify_Screen';

const defaultProps = {};

storiesOf('About_Beautify', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('About_Beautify_Default', () => <About_Beautify_Screen {...defaultProps} />);
