import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Loading from './Loading';

const defaultProps = {};

storiesOf('Design System/Molecule/Loading', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Loading_Default', () => <Loading {...defaultProps} />);
