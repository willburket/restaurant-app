import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider ({children}){
    const [jwt, setJwt] = useState(null);

    const login = (token) => {
        setJwt(token);
    }
    
    const logout = () => {
        setJwt(null);
    }

    return(
        <AuthContext.Provider value={{jwt, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};