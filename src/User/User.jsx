import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params=useParams()
    return (
        <div>
            This is user 1
        </div>
    );
};

export default User;