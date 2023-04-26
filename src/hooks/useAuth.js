import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useAuth=()=>{
    const authInfo=useContext(AuthContext);
    return authInfo;
}
export default useAuth;