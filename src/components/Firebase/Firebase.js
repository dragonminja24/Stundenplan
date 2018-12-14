import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAerQpUn9Q-hqIaTcNqD7jU0mE_-gmuI90",
  authDomain: "stundenplan-513cb.firebaseapp.com",
  databaseURL: "https://stundenplan-513cb.firebaseio.com",
  projectId: "stundenplan-513cb",
  storageBucket: "stundenplan-513cb.appspot.com",
  messagingSenderId: "190112507275"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;
