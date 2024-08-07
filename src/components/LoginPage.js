import { useRef, useState } from "react";
import Header from "./Header";
import SignInContext from "../utils/SignInContext";
import {checkValidData} from "../utils/Validate";
import { signIn, signUp ,googleLogin } from "../utils/SignUpSignIn";
import { googleLogo, loginPageImageUrl } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const LoginPage = ()=>{
    const [isSignIn , setIsSignIn] = useState(false);
   
    const[errorMessage , setErrorMessage] = useState();
    
    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
        }
    
    const preferredLanguage = useSelector((store)=>store.config.preferredLanguage);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleGoogleLogin = ()=>{
        googleLogin(setErrorMessage);
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
            signUp(name , email , password , setErrorMessage )
        }
        else{
            // it is sign in form:
            // sign In function uses signInUserWithEmailAndPassword to create a user and setError message if error shows up
            signIn(name, email , password ,setErrorMessage);
        }
        }

        // Now we can sign up /sign In
    return(
        <div className="relative z-[11]  " >
            <SignInContext.Provider value= {{isSignIn:isSignIn , setIsSignIn}}>
                <Header />
            </SignInContext.Provider>
            <div className="">  
                <img src={loginPageImageUrl} className="w-screen h-screen fixed"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" w-9/12 md:w-[40%] xl:w-[500px] md:my-32 my-[30%]  absolute top-[25%] right-0 left-0 flex flex-col  mx-auto bg-black py-10 md:px-16 px-8 bg-opacity-70 rounded-sm z-[11]">

                <label for="email" className="md:text-3xl text-xl md:mb-8 mb-4 text-white font-bold">{isSignIn?"Sign In" : `${lang[preferredLanguage].signUp}`}</label>

                {!isSignIn?(<input type="text" ref={name} placeholder={lang[preferredLanguage].namePlaceholder} id="name" name="name" className="p-3 w-full  mt-5 text-white md:text-lg  border border-gray-500  rounded-sm placeholder:text-gray-400  qoutline-none bg-[#313434]"/>):null}

                <input type="text" ref={email}
                 placeholder={lang[preferredLanguage].emailPlaceholder}id="email" name="Email" className="p-3 w-full mt-5 text-white md:text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>

                <input type="password" ref={password}
                placeholder={lang[preferredLanguage].passwordPlaceholder} name="Password" id="password" className="p-3 w-full  mt-5 text-white md:text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>
                <p className="text-orange-600 font-bold py-3 text-lg">{errorMessage}</p>
                {/* Sign In / sign Up button */}
                <button className="bg-red-600 w-full mt-12 p-2 rounded-sm hover:bg-red-800 transition-all duration-200  text-white mx-auto px-4 " onClick={handleButtonClick}>{isSignIn?"Sign In" :`${lang[preferredLanguage].signUp}`}</button>

                {isSignIn?
                (
                    <p className="text-md px-1 text-gray-300 mt-5">New to Netflix?<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}> Sign up now.</span></p>
                )
                :<p className="text-md px-1 text-gray-300 mt-5">{lang[preferredLanguage].alreadyAUser}<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}>{lang[preferredLanguage].signInLink}</span></p>}

                {isSignIn?
                (
                    <div className="w-full items-center flex flex-col"><p className="mx-auto text-center text-white font-bold mt-3 text-xl">or <br/> Login using</p>
                        <button onClick={handleGoogleLogin} className="hover:underline w-fit  p-2 px-6 border mx-auto border-gray-400 mt-5 cursor-pointer text-white font-bold ">
                            <img src={googleLogo} className="h-10 w-20">
                            </img>
                        </button>
                    </div>
                ):null}

            </form>
        </div>
    )
}

export default LoginPage;