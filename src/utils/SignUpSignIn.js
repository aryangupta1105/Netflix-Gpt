import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signInWithPopup , GoogleAuthProvider , updateProfile} from "firebase/auth";

import {auth} from "../utils/firebase";
import { addUser } from "./userSlice";
import { userIcon } from "./constants";



export const signUp = (name , email , password ,setErrorMessage  , dispatch) =>{
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                updateProfile(user, {
                    displayName: name.current.value
                })
                .then(() => {
                    // we have to update the user and dispatch the user again after updating
                    const {uid , email, displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: userIcon}))
                }).catch((error) => {
                    setErrorMessage(error.message);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
}

export const signIn = (name , email, password ,setErrorMessage )=>{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-"+ errorMessage);
            });
}

export const googleLogin = ( setErrorMessage)=>{
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            auth.languageCode = 'it';
            // To apply the default browser preference instead of explicitly setting it.
            // auth.useDeviceLanguage();
                signInWithPopup(auth, provider)
                .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("Sign in using google successful");

                // IdP data available using getAdditionalUserInfo(result)
                // ...
                }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setErrorMessage( errorMessage);
                // ...
                });
}