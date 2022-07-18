// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJix_Irfycw3Kcgpjzu2smw2Q0wmiy1sU",
  authDomain: "sh-app-a3da2.firebaseapp.com",
  projectId: "sh-app-a3da2",
  storageBucket: "sh-app-a3da2.appspot.com",
  messagingSenderId: "792138362797",
  appId: "1:792138362797:web:4e1e5041f65aed114e3b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)