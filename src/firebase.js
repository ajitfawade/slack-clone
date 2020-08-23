import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3w-npJwE1VPZwv32k1xEZQJKiVs_euFs",
  authDomain: "slack-clone-8242f.firebaseapp.com",
  databaseURL: "https://slack-clone-8242f.firebaseio.com",
  projectId: "slack-clone-8242f",
  storageBucket: "slack-clone-8242f.appspot.com",
  messagingSenderId: "589268112915",
  appId: "1:589268112915:web:e1c6b64b8d210ea74351e6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
