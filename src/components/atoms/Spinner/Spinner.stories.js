import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Spinner from './Spinner';

const defaultProps = {
  size: 'large',
  color: '#ff6bb3',
};

storiesOf('Design System/Atoms/Spinner', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Spinner_Default', () => <Spinner {...defaultProps} />);
