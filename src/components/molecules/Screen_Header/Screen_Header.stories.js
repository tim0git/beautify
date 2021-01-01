import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Screen_Header from './Screen_Header';

const defaultProps = {
  screenTitle: 'Profile & Settings',
};

storiesOf('Screen_Header', module).add('Screen_Header_Default', () => <Screen_Header {...defaultProps} />);
