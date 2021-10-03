// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_aQ918NymoTWnbbTgRDM4hKzz4SICO6w",
  authDomain: "loginfirebaseauth-e2a30.firebaseapp.com",
  projectId: "loginfirebaseauth-e2a30",
  storageBucket: "loginfirebaseauth-e2a30.appspot.com",
  messagingSenderId: "956143012143",
  appId: "1:956143012143:web:b097e2df6f2b1016c379da",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
