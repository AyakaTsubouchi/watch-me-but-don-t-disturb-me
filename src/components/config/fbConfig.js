import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCAfohKMBOvayyXKK_B87fVnYlwThRQoH0',
  authDomain: 'watch-me-but-don-t-disturb-me.firebaseapp.com',
  databaseURL: 'https://watch-me-but-don-t-disturb-me.firebaseio.com',
  projectId: 'watch-me-but-don-t-disturb-me',
  storageBucket: 'watch-me-but-don-t-disturb-me.appspot.com',
  messagingSenderId: '930497494142',
  appId: '1:930497494142:web:76de136bbf047f5e642c2f',
  measurementId: 'G-LRNX2B19Z6'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
