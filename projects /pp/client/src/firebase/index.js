 import firebase from 'firebase/app'
 import 'firebase/storage'

 var config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "wherework-7987e.firebaseapp.com",
    databaseURL: "https://wherework-7987e.firebaseio.com",
    projectId: "wherework-7987e",
    storageBucket: "wherework-7987e.appspot.com",
    messagingSenderId: "981604314276"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }