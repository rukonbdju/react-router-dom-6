import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const authInfo=useContext(AuthContext)
    const {user,setUser}=authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let handleLogin=()=>{
        setUser(true)
        navigate(from, { replace: true });
    }
    return (
        <div>
            This is log in page
            <button onClick={()=>handleLogin()}>LOGIN</button>
        </div>
    );
};

export default Login;