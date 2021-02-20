class ReduxSagaFirebase {
  constructor() {
    this.auth = {
      channel: jest.fn(),
      signInWithPhoneNumber: jest.fn(() => {
        return {confirm: jest.fn()};
      }),
      signOut: jest.fn(),
    };
  }
}

export default ReduxSagaFirebase;
