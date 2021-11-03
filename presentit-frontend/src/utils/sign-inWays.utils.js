import { auth } from './firebase.utils';
import { signInWithPopup, getRedirectResult, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";
import api from '../services/api';
// import gapi from 'gapi';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/drive.readonly');
// provider.addScope('https://www.google.com/calendar/feeds');

const CLIENT_ID = '600980939856-mov1kn7ne34g18v04nntotjqqsbiho22.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://presentit-bf2b5.firebaseapp.com/__/auth/handler';

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then(async (result) => {
    //All is handled in App.js => useEffect()
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const refreshToken = result._tokenResponse.refreshToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log({credential});
    console.log({accessToken});
    console.log({refreshToken});
    console.log({result});

    const responseBackEnd  = await api.post("/action/backend", {
      refreshToken: refreshToken,
      accessToken: accessToken
    });

    console.log({responseBackEnd});

    // gapi.server.setApiKey('YOUR_API_KEY');

    // const oauth2Client = new google.auth.OAuth2(
    //   CLIENT_ID,
    //   CLIENT_SECRET,
    //   REDIRECT_URI
    // );

    // const scopes = [
    //   'https://www.googleapis.com/auth/blogger',
    //   'https://www.googleapis.com/auth/calendar'
    // ];
    
    // const url = oauth2Client.generateAuthUrl({
    //   // 'online' (default) or 'offline' (gets refresh_token)
    //   access_type: 'offline',
    
    //   // If you only need one scope you can pass it as a string
    //   scope: scopes
    // });

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    alert(`${error}`);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export const refreshAccessToken = async () => {
  const responseBackEnd  = await api.post("/action/backend", {
    refreshToken: 'pff',
    accessToken: 'access jeje'
  });

  console.log({responseBackEnd});
}


export const signOutWithGoogle = () => signOut(auth);

