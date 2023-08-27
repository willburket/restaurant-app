import React, { useEffect, useState } from "react";
import { PriceDropdown } from "./Price";
import { SearchBar, SearchButton } from "./Search";
import LocationDropdown from "./Location";
import DistanceDropdown from "./Distance";
import { fetchPlaces } from "../../utils/placesUtil";


function Navbar() {
    const [food, setFood] = useState(null)
    const [price, setPrice] = useState(null)
    const [location, setLocation] = useState(null)
    const [distance, setDistance] = useState(null)

    useEffect(() =>{
        console.log(location)
    }, [location])

    const search = () => {
        if (food && price && location && distance){
            const lat = location.lat;
            const lon = location.lon;
            fetchPlaces(food,price,lat,lon,distance);
        } else{
            console.log("not set")
        }
    }

    const locationCallback = (data) => {
        setLocation(data)
    }

    const priceCallback = (data) => {
        setPrice(data.value)
    }

    const distanceCallback = (data) => {
        setDistance(data.value)
    }
    
    const searchCallback = (data) =>{
        setFood(data)
    }

    return(
        <div className="bg-indigo-500 h-16 w-full top-16 p-2 flex">
            <SearchBar handleCallback = {searchCallback}/>
            <LocationDropdown handleCallback = {locationCallback}/>
            <DistanceDropdown handleCallback = {distanceCallback}/>
            <PriceDropdown handleCallback = {priceCallback}/>
            <SearchButton onClick = {search}/>
        </div>
    )
};

export default Navbar;