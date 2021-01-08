import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Profile_Screen from './Profile_Screen';

const guestProps = {
  isLoggedIn: false,
};

const loggedInProps = {
  isLoggedIn: true,
  signOut: () => {}, // redux auth dispatch
};

storiesOf('Design System/Screens/Profile_Screen', module)
  .add('Profile_Guest', () => <Profile_Screen {...guestProps} />)
  .add('Profile_LoggedIn', () => <Profile_Screen {...loggedInProps} />);
