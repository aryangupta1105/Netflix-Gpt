import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <p>Error {err.status}</p>
        </div>
    )
}

export default Error;