import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Carousel_View from './Carousel_View';

const defaultProps = {};

storiesOf('Carousel_View', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Carousel_View_Default', () => <Carousel_View {...defaultProps} />);
