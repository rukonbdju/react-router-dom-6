import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div>
           <h1> This is user list</h1>
           <Link to={'/users/user1'}>User details</Link>
        </div>
    );
};

export default Users;