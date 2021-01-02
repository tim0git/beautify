import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_List from './Menu_List';

const defaultProps = {};

storiesOf('Design System/Molecule/Menu_List', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_List_Default', () => <Menu_List {...defaultProps} />);
