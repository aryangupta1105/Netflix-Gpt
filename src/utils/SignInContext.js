import { createContext } from "react";

const SignInContext =  createContext(
    {
        isSignIn: true
    }
);

export default SignInContext;