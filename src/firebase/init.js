import firebase from 'firebase'
import firestone from 'firebase/firestone'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjUb0qu6xc-ORfz_dmzihggCuZixeqxcw",
    authDomain: "vue-app-58eef.firebaseapp.com",
    databaseURL: "https://vue-app-58eef.firebaseio.com",
    projectId: "vue-app-58eef",
    storageBucket: "vue-app-58eef.appspot.com",
    messagingSenderId: "413034383395"
  };
  firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()