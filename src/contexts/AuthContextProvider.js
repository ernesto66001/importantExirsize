import React from 'react';
import {useContext} from "react";
import { useNavigate } from "react-router-dom";
export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);
const API = "http://35.239.251.89/";
const AuthContextProvider = () => {
    return (
        <authContext.Provider >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;