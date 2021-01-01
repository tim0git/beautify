import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Screen_Header from './Screen_Header';

const defaultProps = {};

storiesOf('Screen_Header', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Screen_Header_Default', () => <Screen_Header {...defaultProps} />);
