import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { BrowserRouter } from "react-router-dom";

const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage/>,
            errorElement: <p>Error</p>
        },
        {
            path: "/browse",
            element: <Browse/>,
            errorElement: <p>Error</p>
        },
       
    ])

    return(
        <div className="">
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
