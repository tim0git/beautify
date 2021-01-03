export const PROFILE_MENU_BUTTONS = {
  About: 'About Beautify',
  Help: 'Help Center',
  Legal: 'Legal Stuff',
  FutureBookings: 'Upcoming Bookings',
  PastBookings: 'Previous Bookings',
  Contact: 'Contact Details',
  Payment: 'Payment Methods',
  Marketing: 'Marketing Preferences',
  Notifications: 'Notifications',
};

export const PROFILE_MENU_NAVIGATION = {
  [PROFILE_MENU_BUTTONS.About]: 'Web_View',
  [PROFILE_MENU_BUTTONS.Help]: 'Web_View',
  [PROFILE_MENU_BUTTONS.Legal]: 'Legal_Screen',
  [PROFILE_MENU_BUTTONS.FutureBookings]: 'Upcoming_Bookings',
  [PROFILE_MENU_BUTTONS.PastBookings]: 'Previous_Bookings',
  [PROFILE_MENU_BUTTONS.Contact]: 'Contact_Details',
  [PROFILE_MENU_BUTTONS.Payment]: 'Payment_Methods',
  [PROFILE_MENU_BUTTONS.Marketing]: 'Marketing_Preferences',
  [PROFILE_MENU_BUTTONS.Notifications]: 'Notifications',
};

export const WEB_VIEW_URLS = {
  TEST_WEBVIEW_URL: 'https://httpstat.us/200',
  TEST_ERROR_WEBVIEW_URL: 'https://httpstat.us/404',
  [PROFILE_MENU_BUTTONS.About]: 'https://apposing.co.uk/privacy-policy/',
  [PROFILE_MENU_BUTTONS.Help]: 'https://apposing.co.uk/privacy-policy/',
};

export const PROFILE_GUEST_MENU = {
  headerText: 'General',
  DATA: [
    {
      id: PROFILE_MENU_BUTTONS.About,
      title: PROFILE_MENU_BUTTONS.About,
      navigationAddress: PROFILE_MENU_NAVIGATION.About,
      testID: 'Profile_Guest_About_Beautify',
    },
    {
      id: PROFILE_MENU_BUTTONS.Help,
      title: PROFILE_MENU_BUTTONS.Help,
      navigationAddress: PROFILE_MENU_NAVIGATION.Help,
      testID: 'Profile_Guest_Help_center',
    },
    {
      id: PROFILE_MENU_BUTTONS.Legal,
      title: PROFILE_MENU_BUTTONS.Legal,
      navigationAddress: PROFILE_MENU_NAVIGATION.Legal,
      testID: 'Profile_Guest_Legal_Stuff',
    },
  ],
};
