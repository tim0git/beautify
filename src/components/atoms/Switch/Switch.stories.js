import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Switch from './Switch';

const defaultProps = {};

storiesOf('Switch', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Switch_Default', () => <Switch {...defaultProps} />);
