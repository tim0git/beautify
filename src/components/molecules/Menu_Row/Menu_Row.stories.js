import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_Row from './Menu_Row';

const onProps = {
  title: 'Booking Complete',
  type: 'Switch',
  onValueChange: (title) => {},
  isEnabled: true,
  disabled: false,
};

const offProps = {
  ...onProps,
  isEnabled: false,
};

const disabledProps = {
  ...onProps,
  isEnabled: true,
  disabled: true,
};

storiesOf('Design System/Molecule/Menu_Row', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_Row_Switch_On', () => <Menu_Row {...onProps} />)
  .add('Menu_Row_Switch_Off', () => <Menu_Row {...offProps} />)
  .add('Menu_Row_Switch_Disabled', () => <Menu_Row {...disabledProps} />);
