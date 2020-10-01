// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3VPhPoAcv9PT476--csRJWLii7p-7Dp8",
    authDomain: "wutsappclone.firebaseapp.com",
    databaseURL: "https://wutsappclone.firebaseio.com",
    projectId: "wutsappclone",
    storageBucket: "wutsappclone.appspot.com",
    messagingSenderId: "791648308456",
    appId: "1:791648308456:web:e206513c8de219182b8d5d",
    measurementId: "G-XEBKCSKC95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;