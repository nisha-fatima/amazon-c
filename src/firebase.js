
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCWCSHvOIYn7w41rsNngvimHf0DTF0lcI",
  authDomain: "clone-202df.firebaseapp.com",
  databaseURL: "https://clone-202df.firebaseio.com",
  projectId: "clone-202df",
  storageBucket: "clone-202df.appspot.com",
  messagingSenderId: "182842823373",
  appId: "1:182842823373:web:6e1552865b692efd2d0f84"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth };
