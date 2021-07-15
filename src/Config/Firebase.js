import firebase from "firebase";
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyD2oyA6zZxv1zV-VU4xF0KYzq5VmuHbjhc",
  authDomain: "quiz-app-react-bfbbb.firebaseapp.com",
  projectId: "quiz-app-react-bfbbb",
  storageBucket: "quiz-app-react-bfbbb.appspot.com",
  messagingSenderId: "1007476154866",
  appId: "1:1007476154866:web:4b76033f797bd97eb9cb6b",
  measurementId: "G-WZZ29FQ0NV"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
