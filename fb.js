import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyB-gSCtHYpqeTvpUHRa9Dy9hb_AuHrYDOs",
  authDomain: "testla-a966e.firebaseapp.com",
  databaseURL: "https://testla-a966e.firebaseio.com",
  projectId: "testla-a966e",
  storageBucket: "testla-a966e.appspot.com",
  messagingSenderId: "616453735469",
  appId: "1:616453735469:web:34c5702acd2cb79b31a4a4",
  measurementId: "G-FT37ZLHEGM"
};
  // Initialize Firebase
  
 let fire = firebase.initializeApp(firebaseConfig);

 

  export default fire;