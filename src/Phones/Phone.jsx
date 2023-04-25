import React from 'react';
import { useParams } from 'react-router-dom';

const Phone = () => {
    const params=useParams()
    const model=params.model;
    return (
        <div>
            <h1>This is a {model}</h1>
        </div>
    );
};

export default Phone;