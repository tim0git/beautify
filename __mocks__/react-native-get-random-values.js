export default {
  getRandomBase64: jest.fn().mockImplementation(() => {
    return 'mockedBase64';
  }),
};
