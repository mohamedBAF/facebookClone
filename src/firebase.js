
import firebase from 'firebase'




var firebaseConfig = {
  apiKey: "AIzaSyAL3H2kvICMmYiWvmTVu9K-naRjV1rc_E4",
  authDomain: "facebook-clone-de85d.firebaseapp.com",
  databaseURL: "https://facebook-clone-de85d.firebaseio.com",
  projectId: "facebook-clone-de85d",
  storageBucket: "facebook-clone-de85d.appspot.com",
  messagingSenderId: "685282315664",
  appId: "1:685282315664:web:35358eced7ed9bd83a7715",
  measurementId: "G-4P785L5H5G"
};
// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export{auth,provider};
  export default  db