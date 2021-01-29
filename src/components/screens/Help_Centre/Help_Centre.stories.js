import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Help_Centre_Screen from './Help_Centre_Screen';

const defaultProps = {};

storiesOf('Help_Centre', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Help_Centre_Default', () => <Help_Centre_Screen {...defaultProps} />);
