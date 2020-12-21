import auth from '@react-native-firebase/auth';
export class Auth {
  // Method

  onAuthStateChanged(user) {
    // dispatch action AUTH_STATE_CHANGE
    // set state with user : user && initializing : false
  }

  subscriber() {
    // dispatch action SUBSCRIBE_FIREBASE_AUTH
    // set auth reducer to default values.
    return auth().onAuthStateChanged(this.onAuthStateChanged);
  }
}

// Firebase Auth

// as a user i should be able to create an account

// as a user i should be able to Login with my phone number and OTP

// as a user i should be able to log out

// as a user i should not be asked to Login if my session is still active

// authState: {
//   initializing: true; // set to false once firebase has connected,
//   user: {
//   } // user object returned form firebase??
// }
