/* eslint-disable no-undef */
describe('<Guest />', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Guest - Onboarding', () => {
    test('Should show onboarding screen', async () => {
      await expect(element(by.id('Onboarding_Default_Screen_Template'))).toBeVisible();
    });

    test('should swipe to second onboarding card', async () => {
      await element(by.id('Onboarding_Carousel')).swipe('left');
      await expect(element(by.id('Onboarding_Carousel'))).toBeVisible();
    });

    test('should swipe to third onboarding card', async () => {
      await element(by.id('Onboarding_Carousel')).swipe('left');
      await element(by.id('Onboarding_Carousel')).swipe('left');
      await expect(element(by.id('Onboarding_Carousel'))).toBeVisible();
    });

    test('Should show Home screen after skipping onboarding', async () => {
      await element(by.id('Header_Next_Button')).tap();
      await expect(element(by.id('Home_SearchBarButton'))).toBeVisible();
    });
  });

  describe('Guest - TabBar Navigation', () => {
    test('Home Screen should show a search bar button', async () => {
      await expect(element(by.id('Home_SearchBarButton'))).toBeVisible();
    });

    test('should show search screen after tap on search bar button', async () => {
      await element(by.id('Home_SearchBarButton')).tap();
      await expect(element(by.text('Start searching'))).toBeVisible();
      await expect(element(by.text('Browse by category or by practitioner'))).toBeVisible();
    });

    test('should show Guest bookings screen after tap on bookings bottom tab bar icon', async () => {
      await element(by.id('TabBar_Bookings')).tap();
      await expect(element(by.text('No Bookings made yet.'))).toBeVisible();
    });

    test('should show Guest inbox screen after tap on inbox bottom tab bar icon', async () => {
      await element(by.id('TabBar_Inbox')).tap();
      await expect(element(by.text('No messages yet.'))).toBeVisible();
    });

    test('should show guest profile screen after tap on profile bottom tab bar icon', async () => {
      await element(by.id('TabBar_Profile')).tap();
      await expect(
        element(
          by.text(
            "Hey! It looks like you're new here. Once you've booked a treatment, all your info will be found here.",
          ),
        ),
      ).toBeVisible();
    });
  });

  describe('<Guest - Profile Navigation>', () => {
    test('should show General navigation menu header', async () => {
      await element(by.id('TabBar_Profile')).tap();
      await expect(element(by.id('Profile_Guest_Menu'))).toBeVisible();
    });
    test('should NOT show logged in user profile menus', async () => {
      await element(by.id('TabBar_Profile')).tap();
      await expect(element(by.id('Profile_User_Menu'))).not.toBeVisible();
      await expect(element(by.id('Profile_User_Bookings_Menu'))).not.toBeVisible();
      await expect(element(by.id('Profile_User_Settings_Menu'))).not.toBeVisible();
    });
  });
});
