import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqbIxMLA_aw54TFl_w_EioATPKuMzoLKY",
    authDomain: "bookclub-8be40.firebaseapp.com",
    databaseURL: "https://bookclub-8be40-default-rtdb.firebaseio.com",
    projectId: "bookclub-8be40",
    storageBucket: "bookclub-8be40.appspot.com",
    messagingSenderId: "550464468541",
    appId: "1:550464468541:web:bc3717e5b2afbbcf65dc54",
    measurementId: "G-FB283DZJ7V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };