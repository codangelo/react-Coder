import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTMwSAtyCNsDeTB0cLzBdH5t7qOLypSJs",
  authDomain: "proyectocoderhouse-6b1e9.firebaseapp.com",
  projectId: "proyectocoderhouse-6b1e9",
  storageBucket: "proyectocoderhouse-6b1e9.appspot.com",
  messagingSenderId: "704316137370",
  appId: "1:704316137370:web:ad8d08c8dbc4fed0b3e423"
};

const productos = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
  return firebase.firestore(productos)
}
