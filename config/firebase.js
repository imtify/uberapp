import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDPrN5An63BfFLMJl1GYjbNvSdO9dXNI5o',
  authDomain: 'nativelogin-a0146.firebaseapp.com',
  projectId: 'nativelogin-a0146',
  storageBucket: 'nativelogin-a0146.appspot.com',
  messagingSenderId: '174167167522',
  appId: '1:174167167522:web:4b8d9fde0291e4cb55707b',
  measurementId: 'G-S3EED0GZ2B',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
