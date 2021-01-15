import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Switch from './Switch';

const enabledProps = {
  isEnabled: true,
  onValueChange: () => {},
  disbaled: false,
};

const disabledProps = {
  ...enabledProps,
  isEnabled: false,
};

storiesOf('Switch', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Switch_Enabled', () => <Switch {...enabledProps} />)
  .add('Switch_Disabled', () => <Switch {...disabledProps} />);
