import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../hooks/useAuth';
const Header = () => {
    const {authInfo,methods}=useAuth()
    const {user}=authInfo;
    const {handleLogOut}=methods;
    console.log(user)
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'products'}>Products</Link>
            <Link to={'phones'}>Phones</Link>
            <Link to={'blogs'}>Blogs</Link>
            <Link to={'about'}>About</Link>
            <Link to={'dashboard'}>Dashboard</Link>
            {user?<h4>{user?.displayName}</h4>:<Link to={'login'}>Login</Link>}
            
            {user&&<img src={user?.photoURL} height={50} width={50}></img>}
            {user&&<button onClick={()=>handleLogOut()}>LOGOUT</button>}
        </nav>
    );
};

export default Header;