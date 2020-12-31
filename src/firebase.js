import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB79GXZJ7jbBgKsVMmDum0ppqr0B27QPIY",
  authDomain: "imessage-1861f.firebaseapp.com",
  projectId: "imessage-1861f",
  storageBucket: "imessage-1861f.appspot.com",
  messagingSenderId: "882176192269",
  appId: "1:882176192269:web:0b5a77098d314989d08a44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
