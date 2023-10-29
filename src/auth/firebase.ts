import { initializeApp } from 'firebase/app';
import { FIREBASE_APIKEY, FIREBASE_APPID, FIREBASE_AUTHDOMAIN, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECTID, FIREBASE_STORAGE_BUCKET } from 'src/config';

const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    projectId: FIREBASE_PROJECTID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APPID,
};

// Initialize Firebase
export const initializeAuth = initializeApp(firebaseConfig);
