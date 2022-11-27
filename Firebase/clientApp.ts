import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
interface firebaseConfig{
  apiKey: string,
  authDomain:string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
}
const firebaseConfig = {
  apiKey: process.env.APIKEY,

  authDomain: process.env.AUTHDOMAIN,

  projectId: process.env.PROJECTID,

  storageBucket: process.env.STORAGEBUCKET,

  messagingSenderId: process.env.MESSAGINGSENDERID,

  appId:process.env.APPID

};
// Initialize Firebase
 initializeApp(firebaseConfig) 
const firestore = getFirestore(getApp());
const storage = getStorage(getApp());
const auth = getAuth(getApp());
export {firestore, storage, auth}