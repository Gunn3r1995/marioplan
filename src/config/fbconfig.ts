import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGogaFGQJ3jw9avUKyhRGJcV96V6a7KyU",
  authDomain: "mario-plan-29ba2.firebaseapp.com",
  databaseURL: "https://mario-plan-29ba2.firebaseio.com",
  projectId: "mario-plan-29ba2",
  storageBucket: "",
  messagingSenderId: "892934978271",
  appId: "1:892934978271:web:cb7400073030824f"
};

// react-redux-firebase config
export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
