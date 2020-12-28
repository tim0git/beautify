import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import IconMCI from './IconMCI';

const defaultProps = {
  size: 30,
  color: 'black',
};

storiesOf('IconMCI', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('IconMCI-Bookings', () => <IconMCI {...defaultProps} name="magnify" />)
  .add('IconMCI-Search', () => <IconMCI {...defaultProps} name="spa-outline" />)
  .add('IconMCI-Inbox', () => <IconMCI {...defaultProps} name="message-text-outline" />)
  .add('IconMCI-Profile', () => <IconMCI {...defaultProps} name="account-outline" />);
