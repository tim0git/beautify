import {MOCK_FIREBASE} from '@env';
import firebase from '@react-native-firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import '@react-native-firebase/auth';
// import '@react-native-firebase/messaging'; // <--- import it here

firebase.auth().settings.appVerificationDisabledForTesting = MOCK_FIREBASE ? true : false;
console.log(firebase.auth().settings.appVerificationDisabledForTesting);
const firebaseApp = firebase.apps[0];
// @ts-ignore
const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
