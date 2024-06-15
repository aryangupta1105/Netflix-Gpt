import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";
const Body = ()=>{
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage/>,
            errorElement: <Error/>
        },
        {
            path: "/browse",
            element: <Browse/>,
            errorElement: <Error/>
        },
        {
            path: "/error", 
            element: <Error/>
        }
    ])

    // navigate hook: can't use at the routing level it should be insider router provider

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user

            //this provides other things also like email , displayName , uid;   
              const {uid , email, displayName} = user;
              dispatch(addUser({uid: uid, email:email , displayName: displayName}));
              // ...
              } else {
                  // User is signed out
                  dispatch(removeUser());
                  // ...
            }
          });
          
    } , []);

    return(
        <div className="">
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
