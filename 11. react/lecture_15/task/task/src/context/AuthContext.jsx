import React from 'react';
import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

     const [isAuth, setIsAuth] = useState(false)
     const [user, setUser] = useState({
        username : "",
        password : ""
     })

     console.log("user:", user);
     console.log("Current Auth State:", isAuth);

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth,user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () =>  {
    return useContext(AuthContext);
};

export default AuthContext;