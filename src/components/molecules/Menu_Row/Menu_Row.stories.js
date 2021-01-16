import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_Row from './Menu_Row';

const defaultProps = {};

storiesOf('Menu_Row', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_Row_Default', () => <Menu_Row {...defaultProps} />);
