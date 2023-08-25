import React from "react";
import { PriceDropdown } from "./Dropdown";
import { SearchBar, SearchButton } from "./Search";

function Navbar() {

    // will contain account button

    return(
        <div className="bg-indigo-500 h-16 w-full top-16 p-2 flex">
            <SearchBar/>
            <PriceDropdown/>
            <SearchButton/>
        </div>
    )
};

export default Navbar;