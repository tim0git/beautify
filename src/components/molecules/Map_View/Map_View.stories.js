import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Map_View from './Map_View';

const defaultProps = {};

storiesOf('Map_View', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Map_View_Default', () => <Map_View {...defaultProps} />);
