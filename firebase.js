// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN3VLIuHlOk1m78ge7813rzGQTadeVm1M",
  authDomain: "react-native-firebase-au-56ff2.firebaseapp.com",
  projectId: "react-native-firebase-au-56ff2",
  storageBucket: "react-native-firebase-au-56ff2.appspot.com",
  messagingSenderId: "38745636019",
  appId: "1:38745636019:web:093ba0360aacc426a644c6",
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
