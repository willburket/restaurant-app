import React from "react";
import {ReactComponent as Logo} from "../../assets/images/fork-knife.svg"
import LogIn from "./LogIn";

function Head() {

    // will contain account button

    return(
        <div className="bg-indigo-500 h-16 w-full p-3 flex">
            <Logo/>
            <h1 className="text-5xl font-bold text-white px-3">Food Finder</h1>
            <LogIn/>
        </div>
    )
};

export default Head;