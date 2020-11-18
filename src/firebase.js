import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKmywGQNqFxs2bzojbVkUluec9gTbz9vY",
  authDomain: "react-slack-clone-b80c9.firebaseapp.com",
  databaseURL: "https://react-slack-clone-b80c9.firebaseio.com",
  projectId: "react-slack-clone-b80c9",
  storageBucket: "react-slack-clone-b80c9.appspot.com",
  messagingSenderId: "725486108459",
  appId: "1:725486108459:web:a485bd4345754e8546cf6e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
