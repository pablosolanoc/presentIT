import { auth } from './firebase.utils';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {
    //All is handled in App.js => useEffect()
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    alert("Error Trying to Sign In");
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export const signOutWithGoogle = () => signOut(auth);

