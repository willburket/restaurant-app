import React from "react";
import { Link } from "react-router-dom";

function LogIn(){
    return(
        <Link to = "login" className="text-white bg-purple-700 border-l rounded p-2 h-10">
            Sign In
        </Link>
    )
}

export default LogIn;