import { useState } from "react";
import Header from "./Header";
const LoginPage = ()=>{
    const [isSignIn , setIsSignIn] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }

    return(
        <div className="relative" >
            <Header/>
            <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
            </div>
            <form className=" h-fit absolute top-[20%] right-0 left-0 flex flex-col w-[30%] mx-auto bg-black p-10 px-16 bg-opacity-70 rounded-sm">

                <label for="email" className="text-3xl mb-8 text-white font-bold">{isSignIn?"Sign In" : "Sign Up"}</label>

                {!isSignIn?(<input type="text" placeholder="Enter your name" id="name" name="name" className="p-3 w-full  mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>):null}

                <input type="text" placeholder="Enter your email" id="email" name="Email" className="p-3 w-full mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>

                <input type="password" placeholder="Enter your Password" name="Password" id="password" className="p-3 w-full  mt-5 text-white text-lg border border-gray-500  rounded-sm placeholder:text-gray-400 outline-none bg-[#313434]"/>
                <button type="submit" className="bg-red-600 w-full mt-12 p-2 rounded-sm hover:bg-gray-800 transition-all duration-200 text-white mx-auto px-4 ">{isSignIn?"Sign In" : "Sign Up"}</button>

                {isSignIn?
                (
                    <p className="text-md px-1 text-gray-300 mt-5">New to Netflix?<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}> Sign up now.</span></p>
                )
                :<p className="text-md px-1 text-gray-300 mt-5">Already a User?<span className="hover:underline cursor-pointer text-white font-bold " onClick={toggleSignInForm}> Sign In now.</span></p>}
                
            </form>
        </div>
    )
}

export default LoginPage;