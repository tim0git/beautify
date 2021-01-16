export type NotificationSettings = {
  BookingComplete: boolean;
  UpcomingAppointments48: boolean;
  UpcomingAppointments24: boolean;
  DepositTaken: boolean;
  RemainingPaymentTaken: boolean;
  PaymentFailures: boolean;
  NewPractitioner: boolean;
};

export type NotificationMenuButtons = {
  BookingComplete: string;
  UpcomingAppointments48: string;
  UpcomingAppointments24: string;
  DepositTaken: string;
  RemainingPaymentTaken: string;
  PaymentFailures: string;
  NewPractitioner: string;
};

export type ProfileMenuButtons = {
  About: string;
  Help: string;
  Legal: string;
  UpcomingBookings: string;
  PreviousBookings: string;
  Contact: string;
  Payment: string;
  Marketing: string;
  Notifications: string;
  Logout: string;
};

export type MenuButtonData = {
  id: string;
  title: string;
  navigationAddress: string;
  testID: string;
};

export type ProfileMenu = {
  testID: string;
  headerText: string;
  DATA: ReadonlyArray<MenuButtonData>;
};

export type NotificationSwitchData = {
  id: string;
  title: string;
  testID: string;
};
export type NotificationMenu = {
  testID: string;
  headerText: string;
  DATA: ReadonlyArray<NotificationSwitchData>;
};

export type UserProfileMenu = Array<ProfileMenu>;

export type NotificationsMenu = Array<NotificationMenu>;
