const firebase = {
  apps: [{beautify: 'TEST'}],
  auth: jest.fn(() => {
    return {
      settings: {
        appVerificationDisabledForTesting: false,
      },
    };
  }),
};
export default firebase;
