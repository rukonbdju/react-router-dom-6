import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'products'}>Products</Link>
            <Link to={'phones'}>Phones</Link>
            <Link to={'blogs'}>Blogs</Link>
            <Link to={'about'}>About</Link>
            <Link to={'dashboard'}>Dashboard</Link>
            <Link to={'login'}>Login</Link>
        </nav>
    );
};

export default Header;