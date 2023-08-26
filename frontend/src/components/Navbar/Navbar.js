import React from "react";
import { PriceDropdown } from "./Price";
import { SearchBar, SearchButton } from "./Search";
import LocationDropdown from "./Location";
import DistanceDropdown from "./Distance";


function Navbar() {
    // fetch results from here 

    return(
        <div className="bg-indigo-500 h-16 w-full top-16 p-2 flex">
            <SearchBar/>
            <LocationDropdown/>
            <DistanceDropdown/>
            <PriceDropdown/>
            <SearchButton/>
        </div>
    )
};

export default Navbar;