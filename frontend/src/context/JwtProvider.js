import { createContext, useState } from "react";

const JwtContext = createContext();

function JwtProvider ({children}){
    const [jwt, setJwt] = useState({});

    return(
        <JwtContext.Provider value={{jwt, setJwt}}>
            {children}
        </JwtContext.Provider>
    )
}

export {JwtContext, JwtProvider};