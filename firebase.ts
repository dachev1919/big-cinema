// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCM6MxrU9r7dYXChvOuxKui3smwU4Ogvn0',
	authDomain: 'cinema-ec052.firebaseapp.com',
	projectId: 'cinema-ec052',
	storageBucket: 'cinema-ec052.appspot.com',
	messagingSenderId: '734823254775',
	appId: '1:734823254775:web:24acdb8bfdeaf312caa1f2'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
