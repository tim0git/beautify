import firebase from '@react-native-firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import '@react-native-firebase/auth';
// import '@react-native-firebase/messaging'; // <--- import it here

const firebaseApp = firebase.apps[0];
// @ts-ignore
const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
