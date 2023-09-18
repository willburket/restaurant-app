import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function LogIn(){
    const {jwt, logout} = useAuth();
    if (jwt){
        return(
            <button onClick = {logout} className="text-white bg-purple-700 border-l rounded p-2 h-10">
                Sign Out
            </button>
        )
    }

    return(
        <Link to = "login" className="text-white bg-purple-700 border-l rounded p-2 h-10">
            Sign In
        </Link>
    )
}

export default LogIn;