import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Guest_Welcome from './Guest_Welcome';

const defaultProps = {};

storiesOf('Guest_Welcome', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Guest_Welcome_Default', () => <Guest_Welcome {...defaultProps} />);
