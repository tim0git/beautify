import 'react-native-get-random-values'; // provides UUID access the global object crypto.getRandomValues
import {v4 as uuidv4} from 'uuid';

export const PROFILE_MENU_BUTTONS = {
  About: 'About Beautify',
  Help: 'Help Center',
  Legal: 'Legal Stuff',
  UpcomingBookings: 'Upcoming Bookings',
  PreviousBookings: 'Previous Bookings',
  Contact: 'Contact Details',
  Payment: 'Payment Methods',
  Marketing: 'Marketing Preferences',
  Notifications: 'Notifications',
  Logout: 'Logout',
};

export const PROFILE_MENU_NAVIGATION = {
  About: 'Web_View',
  Help: 'Web_View',
  Legal: 'Legal_Screen',
  UpcomingBookings: 'Upcoming_Bookings',
  PreviousBookings: 'Previous_Bookings',
  Contact: 'Contact_Details',
  Payment: 'Payment_Methods',
  Marketing: 'Marketing_Preferences',
  Notifications: 'Notifications',
  Logout: 'Logout',
};

export const WEB_VIEW_URLS = {
  TEST_WEBVIEW_URL: 'https://httpstat.us/200',
  TEST_ERROR_WEBVIEW_URL: 'https://httpstat.us/404',
  [PROFILE_MENU_BUTTONS.About]: 'https://apposing.co.uk/privacy-policy/',
  [PROFILE_MENU_BUTTONS.Help]: 'https://apposing.co.uk/contact/',
};

export const PROFILE_GUEST_MENU = {
  testID: 'Profile_Guest_Menu',
  headerText: 'General',
  DATA: [
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.About,
      navigationAddress: PROFILE_MENU_NAVIGATION.About,
      testID: 'Profile_Guest_About_Beautify',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Help,
      navigationAddress: PROFILE_MENU_NAVIGATION.Help,
      testID: 'Profile_Guest_Help_center',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Legal,
      navigationAddress: PROFILE_MENU_NAVIGATION.Legal,
      testID: 'Profile_Guest_Legal_Stuff',
    },
  ],
};

export const PROFILE_USER_MENU = {
  testID: 'Profile_User_Menu',
  headerText: PROFILE_GUEST_MENU.headerText,
  DATA: [
    ...PROFILE_GUEST_MENU.DATA,
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Logout,
      navigationAddress: PROFILE_MENU_NAVIGATION.Logout,
      testID: 'Profile_Guest_Logout',
    },
  ],
};

export const PROFILE_USER_BOOKINGS_MENU = {
  headerText: 'Bookings',
  DATA: [
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.UpcomingBookings,
      navigationAddress: PROFILE_MENU_NAVIGATION.UpcomingBookings,
      testID: 'Profile_User_Upcoming_Bookings',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.PreviousBookings,
      navigationAddress: PROFILE_MENU_NAVIGATION.PreviousBookings,
      testID: 'Profile_User_Previous_Bookings',
    },
  ],
};

export const PROFILE_USER_MY_PROFILE_SETTINGS_MENU = {
  headerText: 'My Profile Settings',
  DATA: [
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Contact,
      navigationAddress: PROFILE_MENU_NAVIGATION.Contact,
      testID: 'Profile_User_Contact',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Payment,
      navigationAddress: PROFILE_MENU_NAVIGATION.Payment,
      testID: 'Profile_User_Payment',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Marketing,
      navigationAddress: PROFILE_MENU_NAVIGATION.Marketing,
      testID: 'Profile_User_Marketing',
    },
    {
      id: uuidv4(),
      title: PROFILE_MENU_BUTTONS.Notifications,
      navigationAddress: PROFILE_MENU_NAVIGATION.Notifications,
      testID: 'Profile_User_Notifications',
    },
  ],
};

export const USER_PROFILE_MENU = [PROFILE_USER_BOOKINGS_MENU, PROFILE_USER_MY_PROFILE_SETTINGS_MENU, PROFILE_USER_MENU];
