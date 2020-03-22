import Firebase from "firebase";
var FirebaseConfig = {
  apiKey: "AIzaSyASauti3r0vC2aRQp5pfJrWXZobr9_5Yfs",
  authDomain: "coffeebreak-f00ee.Firebaseapp.com",
  databaseURL: "https://coffeebreak-f00ee.Firebaseio.com",
  projectId: "coffeebreak-f00ee",
  storageBucket: "coffeebreak-f00ee.appspot.com",
  messagingSenderId: "185734514655",
  appId: "1:185734514655:web:b0041d505aeba1a6efe66a",
  measurementId: "G-1SHW0EJQN6"
};

export default Firebase.initializeApp(FirebaseConfig);

export const logOut = () => {
  return Firebase.auth().signOut();
};

export const addAuthListener = callback => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const loginIn = (email, password) => {
  return Firebase.auth().signInWithEmailAndPassword(email, password);
};
