import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Map_View from './Map_View';

const defaultProps = {
  location: {
    latitude: 51.50853,
    longitude: -0.12574,
  },
};

storiesOf('Design System/Atoms/Map_View', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Map_View_Default', () => <Map_View {...defaultProps} />);
