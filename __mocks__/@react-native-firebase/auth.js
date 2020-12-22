export default () => ({
  onAuthStateChanged: jest.fn(),
  signInWithPhoneNumber: jest.fn(() => {
    return {};
  }),
});
