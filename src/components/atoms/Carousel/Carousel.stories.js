import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Carousel from './Carousel';

const defaultProps = {};

storiesOf('Carousel', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Carousel_Default', () => <Carousel {...defaultProps} />);
