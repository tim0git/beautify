import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Screen_Header from './Screen_Header';

const screenProps = {
  headerText: 'Profile & Settings',
  type: 'Screen',
};

const menuProps = {
  headerText: 'General',
  type: 'Menu',
};

storiesOf('Screen_Header', module)
  .add('Screen_Header', () => <Screen_Header {...screenProps} />)
  .add('Menu_Header', () => <Screen_Header {...menuProps} />);
