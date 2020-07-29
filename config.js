import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyC0aq8yIMN4MQwPBR_-kK7HvhB6ErW_Ukk",
    authDomain: "book-santa-app-674a4.firebaseapp.com",
    databaseURL: "https://book-santa-app-674a4.firebaseio.com",
    projectId: "book-santa-app-674a4",
    storageBucket: "book-santa-app-674a4.appspot.com",
    messagingSenderId: "328144452641",
    appId: "1:328144452641:web:71acfbd223c3e4a2ad7760"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();