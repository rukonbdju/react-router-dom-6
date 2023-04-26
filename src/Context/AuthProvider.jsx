import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const authInfo=useFirebase();
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;