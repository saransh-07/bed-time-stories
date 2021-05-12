import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCnxv7OD3pq7WNCpOFEAng0G9Sp9b-T45E",
  authDomain: "storyhub-32ec0.firebaseapp.com",
  databaseURL: "https://storyhub-32ec0-default-rtdb.firebaseio.com",
  projectId: "storyhub-32ec0",
  storageBucket: "storyhub-32ec0.appspot.com",
  messagingSenderId: "97667688816",
  appId: "1:97667688816:web:1af0324fba4a20b68347b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);                   

export default firebase.firestore();