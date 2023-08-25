import React from "react";
import { PriceDropdown } from "./Dropdown";
import { SearchBox, SearchButton } from "./Search";

function Navbar() {

    // will contain account button

    return(
        <div className="bg-indigo-500 h-16 w-full top-16 p-2 flex">
            <SearchBox/>
            <PriceDropdown/>
            <SearchButton/>
        </div>
    )
};

export default Navbar;