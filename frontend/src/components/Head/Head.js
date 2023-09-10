import React from "react";
import {ReactComponent as Logo} from "../../assets/images/fork-knife.svg"
import LogIn from "./LogIn";
import HomeButton from "./HomeButton";
import AccountButton from "./AccountButton";

function Head() {

    // account button only shows when signed in?

    return(
        <div className="bg-zinc-600 h-16 w-full p-3 flex">
            <Logo/>
            <h1 className="text-5xl font-serif text-white px-3">Food Finder</h1>
            <div className="flex items-center ml-auto">
                <HomeButton/>
                <AccountButton/>
                <LogIn/>
            </div>
            
        </div>
    )
};

export default Head;