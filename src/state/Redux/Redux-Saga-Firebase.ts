import firebase from '@react-native-firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import '@react-native-firebase/auth'; // <--- import it here
// import '@react-native-firebase/firestore'; // <--- import it here

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
