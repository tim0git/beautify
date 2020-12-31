import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import IconRN from './Icon';

const defaultProps = {
  size: 30,
  color: 'black',
};

storiesOf('Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Icon-Bookings', () => <IconRN {...defaultProps} name="Bookings" />)
  .add('Icon-Search', () => <IconRN {...defaultProps} name="Search" />)
  .add('Icon-Inbox', () => <IconRN {...defaultProps} name="Inbox" />)
  .add('Icon-Profile', () => <IconRN {...defaultProps} name="Profile" />)
  .add('Icon-ArrowRight', () => <IconRN {...defaultProps} name="ArrowRight" />);
