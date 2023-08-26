import React, { useState, useEffect } from "react";
import { PriceDropdown } from "./Price";
import { SearchBar, SearchButton } from "./Search";
import LocationDropdown from "./Location";
import DistanceDropdown from "./Distance";


function Navbar() {
    const [food, setFood] = useState(null)
    const [price, setPrice] = useState(null)
    const [location, setLocation] = useState(null)
    const [distance, setDistance] = useState(null)

    const locationCallback = (data) => {
        setLocation(data)
    }

    const priceCallback = (data) => {
        setPrice(data)
    }

    const distanceCallback = (data) => {
        setDistance(data)
    }
    
    const searchCallback = (data) =>{
        setFood(data)
    }


    // fetch results from here 

    return(
        <div className="bg-indigo-500 h-16 w-full top-16 p-2 flex">
            <SearchBar handleCallback = {searchCallback}/>
            <LocationDropdown handleCallback = {locationCallback}/>
            <DistanceDropdown handleCallback = {distanceCallback}/>
            <PriceDropdown handleCallback = {priceCallback}/>
            <SearchButton/>
        </div>
    )
};

export default Navbar;