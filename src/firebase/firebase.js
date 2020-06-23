import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCzbxPrywBs-awh0IYEpT60Ur1KeJ-E_gc',
  authDomain: 'fir-node-1bf4a.firebaseapp.com',
  databaseURL: 'https://fir-node-1bf4a.firebaseio.com',
  projectId: 'fir-node-1bf4a',
  storageBucket: 'fir-node-1bf4a.appspot.com',
  messagingSenderId: '862877386166',
  appId: 'super secret app id....adsfa;lsdkjf',
  measurementId: 'super secret as;dlkfjal;dskjf'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// analytics is optional for this tutoral
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
