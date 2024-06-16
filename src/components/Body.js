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

    return(
        <div className="">
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
