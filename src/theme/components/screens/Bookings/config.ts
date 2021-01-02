export const config = {
  screenHeaderProps: {
    headerText: 'My Bookings',
    testID: 'Bookings_Screen_Screen_Header',
  },
  screenInstructionsProps: {
    instructionProps: {
      content: 'No Bookings made yet.',
      type: 'Instruction',
      testID: 'TEST_GUEST_WELCOME_INSTRUCTION',
    },
    bodyProps: {
      content:
        'Once you have made a booking, you can view and manage them here. Search providers to find a treatment for you.',
      type: 'Body',
      testID: 'TEST_GUEST_WELCOME_BODY',
    },
  },
  loginClusterProps: {
    captionProps: {
      content: 'If you already have an account and want to view your bookings',
      type: 'Caption',
      testID: 'Bookings_Screen_Guest_Welcome_Login_Cluster_Caption',
    },
  },
};
