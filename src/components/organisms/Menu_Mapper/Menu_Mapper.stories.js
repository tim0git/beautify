import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_Mapper from './Menu_Mapper';
import {USER_PROFILE_MENU, NOTIFICATIONS_MENU, PROFILE_GUEST_MENU} from '../../../theme/global/config';

const defaultProps = {
  menuData: USER_PROFILE_MENU,
  navigation: () => {},
};

const guestProps = {
  navigation: () => {},
  menuData: [PROFILE_GUEST_MENU],
};

const bookingProps = {
  menuData: NOTIFICATIONS_MENU,
};

storiesOf('Design System/Organism/Menu_Mapper', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_Mapper_Guest_Profile', () => <Menu_Mapper {...guestProps} />)
  .add('Menu_Mapper_User_Profile', () => <Menu_Mapper {...defaultProps} />)
  .add('Menu_Mapper_Bookings', () => <Menu_Mapper {...bookingProps} />);
