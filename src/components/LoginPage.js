import { useRef, useState } from "react";
import Header from "./Header";
import SignInContext from "../utils/SignInContext";
import {checkValidData} from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { signIn, signUp } from "../utils/SignUpSignIn";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = ()=>{
    const [isSignIn , setIsSignIn] = useState(false);

    const[errorMessage , setErrorMessage] = useState();

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleGoogleLogin = ()=>{
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
    // how do you fetch data: 1) use state variables.
    // 2) useRef : use refrence of the variable
    const handleButtonClick = ()=>{
        // Validate the form data:
        const message =  checkValidData( email.current.value , password.current.value);
        setErrorMessage(message);

        // if not valid then return...
        if(message) return;

        // Create user / Sign UP:
        if(!isSignIn){
            // sign up function uses createUserWithEmailAndPassword to create a user and setError message if error shows up
            signUp("Aryan Gupta" , email , password , setErrorMessage)
            console.log("Sign up successful");
        }
        else if(isSignIn){
            // it is sign in form:
            // sign In function uses signInUserWithEmailAndPassword to create a user and setError message if error shows up
            signIn(email , password ,setErrorMessage);
            console.log("Sign in successful");
        }
        }

        // Now we can sign up /sign In
    return(
        <div className="relative" >
            <SignInContext.Provider value= {{isSignIn:isSignIn , setIsSignIn}}>
                <Header />
            </SignInContext.Provider>
            <div className="">  
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" h-fit absolute top-[15%] right-0 left-0 flex flex-col w-[30%] mx-auto bg-black p-10 px-16 bg-opacity-70 rounded-sm">

                <label for="email" className="text-3xl mb-8 text-white font-bold">{isSignIn?"Sign In" : "Sign Up"}</label>

                {!isSignIn?(<input type="text" placeholder="Enter your name" id="name" name="name" className="p-3 w-full  mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400  qoutline-none bg-[#313434]"/>):null}

                <input type="text" ref={email}
                 placeholder="Enter your email" id="email" name="Email" className="p-3 w-full mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>

                <input type="password" ref={password}
                placeholder="Enter your Password" name="Password" id="password" className="p-3 w-full  mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>
                <p className="text-orange-600 font-bold py-3 text-lg">{errorMessage}</p>
                {/* Sign In / sign Up button */}
                <button className="bg-red-600 w-full mt-12 p-2 rounded-sm hover:bg-red-800 transition-all duration-200  text-white mx-auto px-4 " onClick={handleButtonClick}>{isSignIn?"Sign In" : "Sign Up"}</button>

                {isSignIn?
                (
                    <p className="text-md px-1 text-gray-300 mt-5">New to Netflix?<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}> Sign up now.</span></p>
                )
                :<p className="text-md px-1 text-gray-300 mt-5">Already a User?<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}> Sign In now.</span></p>}

                {isSignIn?
                (
                    <div className="w-full items-center flex flex-col"><p className="mx-auto text-center text-white font-bold mt-3 text-xl">or <br/> Login using</p>
                        <button onClick={handleGoogleLogin} className="hover:underline w-fit  p-2 px-6 border mx-auto border-gray-400 mt-5 cursor-pointer text-white font-bold ">
                            <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" className="h-10 w-20">
                            </img>
                        </button>
                    </div>
                ):null}

            </form>
        </div>
    )
}

export default LoginPage;