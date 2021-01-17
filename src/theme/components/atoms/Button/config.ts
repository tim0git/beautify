import {colors} from '../../../global/styles';
import {PROFILE_MENU_BUTTONS} from '../../../global/config/constants/menu';
export const config = {
  SearchBar: {
    name: 'Search',
    color: colors.text.tertiary,
    size: 30,
  },
  Primary: {
    name: 'ArrowRight',
    color: colors.text.primary,
    size: 30,
  },
  Secondary: {
    name: 'ArrowRight',
    color: colors.text.secondary,
    size: 27,
  },
  Menu: {
    name: 'ArrowRight',
    color: colors.text.primary,
    size: 30,
  },
  HeaderBackButton: {
    name: 'ArrowLeft',
    color: colors.text.primary,
    size: 30,
  },
  MENULEFT: {
    [PROFILE_MENU_BUTTONS.About]: {
      name: 'Bookings',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Help]: {
      name: 'Help',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Legal]: {
      name: 'Legal',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.UpcomingBookings]: {
      name: 'Calendar',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.PreviousBookings]: {
      name: 'Calendar',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Contact]: {
      name: 'Profile',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Payment]: {
      name: 'CreditCard',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Marketing]: {
      name: 'Marketing',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Notifications]: {
      name: 'Bell',
      color: colors.text.primary,
      size: 30,
    },
    [PROFILE_MENU_BUTTONS.Logout]: {
      name: 'ArrowLeft',
      color: colors.text.primary,
      size: 30,
    },
  },
};
