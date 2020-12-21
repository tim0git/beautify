const AUTH_ACTIONS = {
  SUBSCRIBE_FIREBASE_AUTH: 'SUBSCRIBE_FIREBASE_AUTH',
};

interface authStateInterface {
  initializing: boolean;
  user: object;
}

const authState: authStateInterface = {
  initializing: true,
  user: null,
};

export const authentication = (state = authState, action) => {
  switch (action.type) {
    // case AUTH_ACTIONS.SUBSCRIBE_FIREBASE_AUTH: {
    //   return {
    //     ...authState,
    //   };
    // }
    default:
      return state;
  }
};
