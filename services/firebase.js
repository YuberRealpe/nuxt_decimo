import firebase, {firestore} from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCeGgJP6bHWm7SMKkq0vcB0dZILvFJCg4M",
    authDomain: "mytenda-f8a93.firebaseapp.com",
    databaseURL: "https://mytenda-f8a93.firebaseio.com",
    projectId: "mytenda-f8a93",
    storageBucket: "mytenda-f8a93.appspot.com",
    messagingSenderId: "852556635264"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }

  const db = firebase.firestore()
  const storage = firebase.storage().ref()
  const auth = firebase.auth()

  export default firebase 
  export{
      db,storage,auth
  }