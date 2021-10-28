
import { collection, getDocs, getDoc, query, where, setDoc, doc } from "@firebase/firestore";
import {firestore} from './firebase.utils';

export const createUser = async (userAuth, additionalInfo) => {
    if(!userAuth) return;
  
    //Others ways of getting data from firestore
    // const userDocs = await getDocs(usersRef);
    // const userList = userDocs.docs.map(doc => doc.data());
  
    // const q = query(usersRef, where("nombre", "==", `${userAuth.uid}`));
  
    // const q = query(usersRef, where("nombre", "==", `${userAuth.uid}`));
    // const usersSnapShot = await getDocs(q);
  
    console.log({userAuth});
    const usersRef = collection(firestore, `users`);
    const newDocRef = doc(firestore, "users", `${userAuth.uid}`);
    
  //--------------
    const specificUser = await getDoc(newDocRef);
    
    // console.log({usersRef});
    // console.log({q});
    // console.log({usersSnapShot});
    // console.log({specificUser});
  
  
    if(specificUser.exists()){
      console.log('SI existe');
    }else{
      await setDoc(newDocRef, {
        name: `${userAuth.displayName}`,
        email: `${userAuth.email}`,
        profilePic: `${userAuth.photoURL}`,
        phoneNumber: `${userAuth.phoneNumber}`
  
      });
      console.log("hey there");
    }
    
  }