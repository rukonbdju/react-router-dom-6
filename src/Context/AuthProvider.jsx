import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const authInfo=useAuth();
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;