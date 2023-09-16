import React from "react";
import { Link } from "react-router-dom";

function HomeButton (){

    return(
        <Link to = "/" className="text-white bg-purple-700 border-l rounded p-2 h-10">
            Home
        </Link>
    )
}

export default HomeButton;