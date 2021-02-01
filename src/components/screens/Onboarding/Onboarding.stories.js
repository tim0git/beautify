import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Onboarding_Screen from './Onboarding_Screen';

const defaultProps = {};

storiesOf('Onboarding', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Onboarding_Default', () => <Onboarding_Screen {...defaultProps} />);
