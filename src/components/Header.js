import { useContext, useEffect } from "react";
import SignInContext from "../utils/SignInContext";
import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = ()=>{
   const {isSignIn , setIsSignIn} = useContext(SignInContext);

   const navigate = useNavigate();
   
    const handleSignOut= ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    const user = useSelector((store) => store.user);

    return(
        <div className="w-full absolute top-0  bg-gradient-to-b from-black to-transparent h-screen">
            <div className="flex max-w-[1440px] w-10/12 mx-auto justify-between px-8 p-2 items-center">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[190px]" loading="lazy"></img>
               {!isSignIn?(<div className="flex">
                    <div className="px-6 p-1 border bg-transparent rounded-sm  border-gray-400 text-white font-semibold">
                        <select type="search" className="bg-transparent outline-none border-none"  name="choices" >
                                <option value="English" className="px-2 text-black">English</option>
                                <option value="Hindi" className="px-2 text-black">Hindi</option>
                        </select>
                    </div>

                    <button className=" ml-5 bg-red-600 hover:bg-red-800 transition-all duration-200 rounded-md px-4 text-white p-1" onClick={()=>setIsSignIn(!isSignIn)}>Sign In</button>
            </div>):null}
                
                {user?(<div className="flex items-center ">
                    <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" alt="user-icon" className="h-12 w-12 rounded-full bg-red-600 cursor-pointer"></img>
                    <p className="text-white p-2 px-4">Hi!.. {user?.displayName}</p>
                    <button className="ml-3 bg-red-600 hover:bg-red-800 transition-all duration-200 rounded-md h-fit p-1 px-3 text-lg text-white" onClick={handleSignOut}>Sign Out</button>
                </div>):null}
        </div>
        </div>
    )
}

export default Header;