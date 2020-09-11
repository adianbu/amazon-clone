import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyW0ZOcMmsCvUWV3SRjVBt_TvCCuG1-uI",
  authDomain: "clone-9c7e8.firebaseapp.com",
  databaseURL: "https://clone-9c7e8.firebaseio.com",
  projectId: "clone-9c7e8",
  storageBucket: "clone-9c7e8.appspot.com",
  messagingSenderId: "718064573009",
  appId: "1:718064573009:web:5305c1572da96e0f3a3670",
  measurementId: "G-DV0ZKPW6LH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
