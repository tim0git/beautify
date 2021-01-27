export type MenuSettings = {
  'Booking Complete'?: boolean;
  'Upcoming Appointments (48hr)'?: boolean;
  'Upcoming Appointments (24hr)'?: boolean;
  'Deposit Taken'?: boolean;
  'Remaining Payment Taken'?: boolean;
  'Payment Failures'?: boolean;
  'New Practitioner'?: boolean;
  'Via Email'?: boolean;
  'Via SMS'?: boolean;
};

export type ProfileMenuNotifications = {
  BookingComplete: string;
  UpcomingAppointments48: string;
  UpcomingAppointments24: string;
  DepositTaken: string;
  RemainingPaymentTaken: string;
  PaymentFailures: string;
  NewPractitioner: string;
};

export type ProfileMenuUser = {
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

export type ProfileMenuMarketing = {
  ViaEmail: string;
  ViaSMS: string;
};

export type MenuButtonData = {
  id: string;
  title: string;
  navigationAddress: string;
  testID: string;
};

export type MenuSwitchData = {
  id: string;
  title: string;
  testID: string;
};

export type MenuListData = {
  testID: string;
  headerText: string;
  DATA: ReadonlyArray<MenuSwitchData | MenuButtonData>;
};

export type MenuMapperData = Array<MenuListData>;
