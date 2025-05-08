import { useContext, useEffect, useState } from "react";
import SignInContext from "../utils/SignInContext";
import {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo , supported_language, userIcon } from "../utils/constants";
import { clearMovieResults, toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
import LogoImage from "../utils/image.png";
        
const Header = ()=>{
   const {isSignIn , setIsSignIn} = useContext(SignInContext);
   const[showName , setShowName] = useState(false);

//    Gpt Search toggle

    const preferredLanguage = useSelector((store)=>store.config.preferredLanguage);

    const handleGPTSearchClick = ()=>{
        dispatch(toggleGPTSearch());
        dispatch(clearMovieResults());
    }




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
    const gpt = useSelector((store)=>store.gpt);
    
    const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value));
    }



    return(
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30" >
            <div className="flex md:flex-row flex-col w-full mx-auto justify-between items-center">
                <img src={Netflix_Logo} className="w-[190px]" loading="lazy"></img>
               {!isSignIn?(<div className="flex">
                    <div className="px-6 p-1 border bg-transparent rounded-sm  border-gray-400 text-white font-semibold">
                        <select type="search" className="bg-transparent outline-none border-none"  name="choices" onChange={handleLanguageChange}>
                                {supported_language.map((lang)=>(<option key={lang.identifier}value={lang.identifier}className="px-2 text-black">{lang.name}</option>
                                ))}
                        </select>
                    </div>

                    <button className=" ml-5 bg-red-600 hover:bg-red-800 transition-all duration-200 rounded-md px-4 text-white p-1" onClick={()=>setIsSignIn(!isSignIn)}>{`${lang[preferredLanguage].signIn}`}</button>
            </div>):null}
                
                {user?(<div className="flex items-center ">
                    
                         <button className="text-white mr-5 bg-black p-2 px-5 border rounded-lg hover:text-red-500 transition-all duration-800 hover:border-red-500 " onClick={handleGPTSearchClick}>{!gpt.showGPTSearch?("Try GPT-Search") : ("Go to HomePage")}</button>

                    <img src={userIcon} alt="user-icon" className="h-12 w-12 rounded-full border border-black
                     bg-red-600 cursor-pointer" onClick={()=>setShowName(!showName)}></img>

                    {showName && < p className="text-white absolute top-16 right-24 p-2 px-4" >Hi!.. {user?.displayName}</p>}
                    <button className="ml-3 bg-red-600 hover:bg-red-800 transition-all duration-200 rounded-md h-fit p-1 px-3 text-lg text-white" onClick={handleSignOut}>Sign Out</button>

                </div>):null}
        </div>
        </div>
    )
}

export default Header;