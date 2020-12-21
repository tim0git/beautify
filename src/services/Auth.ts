import auth from '@react-native-firebase/auth';

class AuthService {
  static subscriber() {
    return auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  static onAuthStateChanged(user) {
    return user;
  }
}

export default AuthService;

// Firebase Auth

// as a user i should be able to create an account

// as a user i should be able to Login with my phone number and OTP

// as a user i should be able to log out

// as a user i should not be asked to Login if my session is still active
