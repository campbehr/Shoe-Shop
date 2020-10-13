import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEOLmSmtBlInbWENIugFEFwxTN7Xr39Fg",
  authDomain: "shoe-maverick.firebaseapp.com",
  databaseURL: "https://shoe-maverick.firebaseio.com",
  projectId: "shoe-maverick",
  storageBucket: "shoe-maverick.appspot.com",
  messagingSenderId: "195288976837",
  appId: "1:195288976837:web:adf33fbddd307ea2ae0fac",
  measurementId: "G-KL6WJT7G81",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
