import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyCh650E6JyWQyjXpUAcpxKk2MqQN-fq4",
    authDomain: "wapp-clone-816fc.firebaseapp.com",
    projectId: "wapp-clone-816fc",
    storageBucket: "wapp-clone-816fc.appspot.com",
    messagingSenderId: "93442793908",
    appId: "1:93442793908:web:5be157f01cd84d24ec92e1",
    measurementId: "G-LM8BXPGNW9"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;