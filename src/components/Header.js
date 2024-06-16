import { useContext, useEffect } from "react";
import SignInContext from "../utils/SignInContext";
import {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo , userIcon } from "../utils/constants";


const Header = ()=>{
   const {isSignIn , setIsSignIn} = useContext(SignInContext);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   
    const handleSignOut= ()=>{
        signOut(auth).then(() => {
            // We removed navigate from here because we are navigating now from onAuthStateChanged...
          }).catch((error) => {
            
          });
    }

    // We shifted it here because it should be present somewhere which is present everywhere just like Header.js
        // navigate hook: can't use at the routing level it should be insider router provider

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
    
                //this provides other things also like email , displayName , uid;   
                  const {uid , email, displayName , photoURL} = user;
                  dispatch(addUser({uid: uid, email:email , displayName: displayName , photoURL: userIcon}));
                  navigate("/browse");
                  // ...
                  } else {
                      // User is signed out
                      dispatch(removeUser());
                      navigate("/");

                      // ...
                }
              });
              return ()=> unsubscribe();
        } , []);

    const user = useSelector((store) => store.user);

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <div className="flex w-full mx-auto justify-between items-center">
                <img src={Netflix_Logo} className="w-[190px]" loading="lazy"></img>
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
                    <img src={userIcon} alt="user-icon" className="h-12 w-12 rounded-full bg-red-600 cursor-pointer"></img>
                    <p className="text-white p-2 px-4">Hi!.. {user?.displayName}</p>
                    <button className="ml-3 bg-red-600 hover:bg-red-800 transition-all duration-200 rounded-md h-fit p-1 px-3 text-lg text-white" onClick={handleSignOut}>Sign Out</button>
                </div>):null}
        </div>
        </div>
    )
}

export default Header;