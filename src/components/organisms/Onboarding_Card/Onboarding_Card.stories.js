import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Onboarding_Card from './Onboarding_Card';

const defaultProps = {
  title: 'Lorem ipsum dolor sit amet,',
  body: 'Lorem ipsum dolor sit amet, at euismod maiorum reprimique sit, quo ei',
  image: 'https://via.placeholder.com/480x640',
};

storiesOf('Onboarding_Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Onboarding_Card_Default', () => <Onboarding_Card {...defaultProps} />);
