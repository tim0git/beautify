import 'react-native-get-random-values'; // provides UUID access the global object crypto.getRandomValues
import {v4 as uuidv4} from 'uuid';
import {
  ProfileMenuNotifications,
  ProfileMenuUser,
  ProfileMenuMarketing,
  MenuMapperData,
  MenuListData,
  LegalStuffGeneral,
} from '../../types/menu.types';

export const PROFILE_MENU_BUTTONS: ProfileMenuUser = {
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

export const PROFILE_MENU_NAVIGATION: ProfileMenuUser = {
  About: 'Profile_About_Beautify',
  Help: 'Profile_Help_Centre',
  Legal: 'Profile_Legal_Stuff',
  UpcomingBookings: 'Upcoming_Bookings',
  PreviousBookings: 'Previous_Bookings',
  Contact: 'Contact_Details',
  Payment: 'Payment_Methods',
  Marketing: 'Profile_Marketing',
  Notifications: 'Profile_Notifications',
  Logout: 'Logout',
};

export const LEGAL_STUFF_NAVIGATION: LegalStuffGeneral = {
  TermsAndConditions: 'Profile_Terms_Conditions',
  PrivacyPolicy: 'Profile_Privacy_Policy',
  Insurance: 'Profile_Insurance',
  DataPolicy: 'Profile_Data_Policy',
};

export const NOTIFICATIONS_MENU_BUTTONS: ProfileMenuNotifications = {
  BookingComplete: 'Booking Complete',
  UpcomingAppointments48: 'Upcoming Appointments (48hr)',
  UpcomingAppointments24: 'Upcoming Appointments (24hr)',
  DepositTaken: 'Deposit Taken',
  RemainingPaymentTaken: 'Remaining Payment Taken',
  PaymentFailures: 'Payment Failures',
  NewPractitioner: 'New Practitioner',
};

export const MARKETING_MENU_BUTTONS: ProfileMenuMarketing = {
  ViaEmail: 'Via Email',
  ViaSMS: 'Via SMS',
};

export const LEGAL_STUFF_MENU_BUTTONS: LegalStuffGeneral = {
  TermsAndConditions: 'Terms and Conditions',
  PrivacyPolicy: 'Privacy Policy',
  Insurance: 'Insurance',
  DataPolicy: 'How your data is stored',
};

export const WEB_VIEW_URLS = {
  TEST_WEBVIEW_URL: 'https://httpstat.us/200',
  TEST_ERROR_WEBVIEW_URL: 'https://httpstat.us/404',
  [PROFILE_MENU_BUTTONS.About]: 'https://apposing.co.uk/privacy-policy/',
  [PROFILE_MENU_BUTTONS.Help]: 'https://apposing.co.uk/contact/',
};

export const PROFILE_GUEST_MENU: MenuListData = {
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

export const PROFILE_USER_MENU: MenuListData = {
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

export const PROFILE_USER_BOOKINGS_MENU: MenuListData = {
  headerText: 'Bookings',
  testID: 'Profile_User_Bookings_Menu',
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

export const PROFILE_USER_MY_PROFILE_SETTINGS_MENU: MenuListData = {
  headerText: 'My Profile Settings',
  testID: 'Profile_User_Settings_Menu',
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

export const NOTIFICATIONS_BOOKINGS_MENU: MenuListData = {
  testID: 'Notifications_Bookings_Menu',
  headerText: 'Booking notifications',
  DATA: [
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.BookingComplete,
      testID: 'Notifications_Menu_Booking_Complete',
    },
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments48,
      testID: 'Notifications_Menu_Upcoming_Appointments_48',
    },
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.UpcomingAppointments24,
      testID: 'Notifications_Menu_Upcoming_Appointments_24',
    },
  ],
};

export const NOTIFICATIONS_PAYMENT_MENU: MenuListData = {
  testID: 'Notifications_Payment_Menu',
  headerText: 'Payment notifications',
  DATA: [
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.DepositTaken,
      testID: 'Notifications_Menu_Deposit_Taken',
    },
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.RemainingPaymentTaken,
      testID: 'Notifications_Menu_Remaining_Payment_Taken',
    },
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.PaymentFailures,
      testID: 'Notifications_Menu_Payment_Failures',
    },
  ],
};

export const NOTIFICATIONS_GENERAL_MENU: MenuListData = {
  testID: 'Notifications_General_Menu',
  headerText: 'General push',
  DATA: [
    {
      id: uuidv4(),
      title: NOTIFICATIONS_MENU_BUTTONS.NewPractitioner,
      testID: 'Notifications_Menu_New_Practitioner',
    },
  ],
};

export const MARKETING_GENERAL_MENU: MenuListData = {
  testID: 'Marketing_General_Menu',
  headerText: '', // intentionally left blank
  DATA: [
    {
      id: uuidv4(),
      title: MARKETING_MENU_BUTTONS.ViaEmail,
      testID: 'Marketing_Menu_Via_Email',
    },
    {
      id: uuidv4(),
      title: MARKETING_MENU_BUTTONS.ViaSMS,
      testID: 'Marketing_Menu_Via_SMS',
    },
  ],
};

export const LEGAL_STUFF_GENERAL_MENU: MenuListData = {
  testID: 'Legal_Stuff_General_Menu',
  headerText: '', // intentionally left blank
  DATA: [
    {
      id: uuidv4(),
      title: LEGAL_STUFF_MENU_BUTTONS.TermsAndConditions,
      navigationAddress: LEGAL_STUFF_NAVIGATION.TermsAndConditions,
      testID: 'Legal_Stuff_Terms_And_Conditions',
    },
    {
      id: uuidv4(),
      title: LEGAL_STUFF_MENU_BUTTONS.PrivacyPolicy,
      navigationAddress: LEGAL_STUFF_NAVIGATION.PrivacyPolicy,
      testID: 'Legal_Stuff_Privacy_Policy',
    },
    {
      id: uuidv4(),
      title: LEGAL_STUFF_MENU_BUTTONS.Insurance,
      navigationAddress: LEGAL_STUFF_NAVIGATION.Insurance,
      testID: 'Legal_Stuff_Insurance',
    },
    {
      id: uuidv4(),
      title: LEGAL_STUFF_MENU_BUTTONS.DataPolicy,
      navigationAddress: LEGAL_STUFF_NAVIGATION.DataPolicy,
      testID: 'Legal_Stuff_Data',
    },
  ],
};

export const GUEST_PROFILE_MENU: MenuMapperData = [PROFILE_GUEST_MENU];

export const USER_PROFILE_MENU: MenuMapperData = [
  PROFILE_USER_BOOKINGS_MENU,
  PROFILE_USER_MY_PROFILE_SETTINGS_MENU,
  PROFILE_USER_MENU,
];

export const NOTIFICATIONS_MENU: MenuMapperData = [
  NOTIFICATIONS_BOOKINGS_MENU,
  NOTIFICATIONS_PAYMENT_MENU,
  NOTIFICATIONS_GENERAL_MENU,
];

export const MARKETING_MENU: MenuMapperData = [MARKETING_GENERAL_MENU];

export const LEGAL_STUFF_MENU: MenuMapperData = [LEGAL_STUFF_GENERAL_MENU];
