import { useState } from "react"

const useAuth=()=>{
    let [user,setUser]=useState(null)
    return{user,setUser}
}
export default useAuth;