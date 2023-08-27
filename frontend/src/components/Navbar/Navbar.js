import React, { useEffect, useState } from "react";
import { PriceDropdown } from "./Price";
import { SearchBar, SearchButton } from "./Search";
import LocationDropdown from "./Location";
import DistanceDropdown from "./Distance";
import { fetchPlaces, getRandomItem } from "../../utils/placesUtil";


function Navbar() {
    const [food, setFood] = useState(null)
    const [price, setPrice] = useState(null)
    const [location, setLocation] = useState(null)
    const [distance, setDistance] = useState(null)

    useEffect(() =>{
        console.log(location)
    }, [location])

    const search = async () => {
        // if session storage has something in it and food, price, location, and distance dont match then clear
        // if session storage has something in it and food, price, location, and distance match then pull out of session
            // storage and pop
        // if session storage is empty then send request to google
        if (food && price && location && distance){
            const lat = location.lat;
            const lon = location.lon;
            const places = await fetchPlaces(food,price,lat,lon,distance);
            console.log(places)
            const item = getRandomItem(places)
            console.log(item)
            // pop item out 
            // set cache
        } else{
            console.log("not set")      // alert? or just do nothing?
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