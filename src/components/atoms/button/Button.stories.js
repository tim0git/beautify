/* eslint-disable no-alert */
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Button from './Button';

const defaultProps = {
  title: 'TEST TITLE',
  type: 'default',
  onPress: () => {
    alert('Pressed!');
  },
  accessible: true,
  accessibilityLabel: 'TEST A11Y LABEL',
  accessibilityHint: 'TEST A11Y HINT',
  accessibilityRole: 'button',
  disabled: false,
  testID: 'TEST_ID',
};

const NoBorderProps = {
  ...defaultProps,
  type: 'NoBorder',
};

const SearchBarProps = {
  ...defaultProps,
  type: 'SearchBar',
  title: 'Search for a treatment or provider',
  iconLeft: true,
};

const PrimaryProps = {
  ...defaultProps,
  type: 'Primary',
  title: 'Find a Treatment',
  iconRight: true,
};

const SecondaryProps = {
  ...defaultProps,
  type: 'Secondary',
  title: 'Login here',
  iconRight: true,
};

const MenuProps = {
  ...defaultProps,
  type: 'Menu',
  title: 'About Beautify',
  iconRight: true,
  iconLeft: true,
};

storiesOf('Design System/Atoms/Buttons', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button_Default', () => <Button {...defaultProps} />)
  .add('Button_NoBorder', () => <Button {...NoBorderProps} />)
  .add('Button_SearchBar', () => <Button {...SearchBarProps} />)
  .add('Button_Primary', () => <Button {...PrimaryProps} />)
  .add('Button_Secondary', () => <Button {...SecondaryProps} />)
  .add('Button_Menu', () => <Button {...MenuProps} />);
