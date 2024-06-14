
export const checkValidData = ( email, password)=>{
    const isEmailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
    const isPasswordValid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);
    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";

    return null;
};