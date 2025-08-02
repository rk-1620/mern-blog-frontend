// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDXbBiEtEjcq0t1C1VDroBzNgaDFziRIiM",
  authDomain: "react-blogs-website-1beb2.firebaseapp.com",
  projectId: "react-blogs-website-1beb2",
  storageBucket: "react-blogs-website-1beb2.firebasestorage.app",
  messagingSenderId: "191230868613",
  appId: "1:191230868613:web:8a1aded0333d63be5c3dec",
  measurementId: "G-02Q51XWSJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async()=>{
    let user = null;
   await signInWithPopup(auth, provider)
    .then((result) =>{
        user = result.user;
        // console.log("ut"+user);
    })
    .catch((err) =>{
        console.log(err);
    })

    // console.log("ut"+user);

    return user;
}
