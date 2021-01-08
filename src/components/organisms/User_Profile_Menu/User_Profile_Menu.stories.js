import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import User_Profile_Menu from './User_Profile_Menu';

const defaultProps = {};

storiesOf('User_Profile_Menu', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('User_Profile_Menu_Default', () => <User_Profile_Menu {...defaultProps} />);
