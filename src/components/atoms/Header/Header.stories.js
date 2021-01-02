import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Header from './Header';

const screenProps = {
  headerText: 'Profile & Settings',
  type: 'Screen',
};

const menuProps = {
  headerText: 'General',
  type: 'Menu',
};

storiesOf('Design System/Atoms/Header', module)
  .add('Header', () => <Header {...screenProps} />)
  .add('Menu_Header', () => <Header {...menuProps} />);
