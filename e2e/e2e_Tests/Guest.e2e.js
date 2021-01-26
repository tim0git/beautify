/* eslint-disable no-undef */
describe('Guest - Navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Home Screen should show a search bar button', async () => {
    await expect(element(by.id('Home_SearchBarButton'))).toBeVisible();
  });

  it('should show search screen after tap on search bar button', async () => {
    await element(by.id('Home_SearchBarButton')).tap();
    await expect(element(by.text('Start searching'))).toBeVisible();
    await expect(element(by.text('Browse by catergory or by practitioner'))).toBeVisible();
  });

  it('should show inbox screen after tap on inbox botton tab bar icon', async () => {
    await element(by.label('Inbox')).tap();
    await expect(element(by.text('No messages yet.'))).toBeVisible();
  });

  it('should show bookings screen after tap on bookings botton tab bar icon', async () => {
    await element(by.label('Bookings')).tap();
    await expect(element(by.text('No Bookings made yet.'))).toBeVisible();
  });

  it('should show guest profile screen after tap on profile botton tab bar icon', async () => {
    await element(by.label('Profile')).tap();
    await expect(
      element(
        by.text(
          "Hey! It looks like you're new here. Once you've booked a treatment, all your info will be found here.",
        ),
      ),
    ).toBeVisible();
  });
});
