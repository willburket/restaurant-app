import React, { useEffect, useState } from "react";
import { PriceDropdown } from "./Price";
import { SearchBar, SearchButton } from "./Search";
import LocationDropdown from "./Location";
import DistanceDropdown from "./Distance";
import { fetchPlaces, getRandomItem } from "../../utils/placesUtil";
import { storeInCache,getFromCache } from "../../utils/cacheUtil";


function Navbar({handleCallback, locateChange}) {
    const [food, setFood] = useState(null)
    const [price, setPrice] = useState(null)
    const [location, setLocation] = useState(null)
    const [distance, setDistance] = useState(null)          // implement state as an object like signin form
    const [result, setResult] = useState(null)

    useEffect(() =>{
        console.log(location)           // need to add loader or something while we're waiting on location
        locateChange(location)
        
    }, [location])

    useEffect(() =>{
        handleCallback(result)
    }, [result])

    const search = async () => {
        // what to do when session storage has run out 
            // if there's another page - fetch next page
                // find "next page token" to fetch another set of 20 
            // if there's no more options - put message on the screen
                
        if (food && price && location && distance){
            const lat = location.lat;
            const lon = location.lon;
            const priceString = price.toString();
            const latString = lat.toString();
            const lonString = lon.toString();
            const distanceString = distance.toString();
            const identifier = `${food}-${priceString}-${latString}-${lonString}-${distanceString}`;
            const storedValue = sessionStorage.getItem(identifier);
            // const storedArray = JSON.parse(storedValue);

            if (sessionStorage.length === 0 || storedValue === null){
                const places = await fetchPlaces(food,price,lat,lon,distance);
                console.log(places)
                if(places !== "no results"){            // use undefined instead?
                    storeInCache(identifier,places)
                    const item = getFromCache(identifier)
                    setResult(item) 
                }
                else{
                    setResult("no results")         // use undefined?
                }    
                              
            } 
            else if (storedValue !== null && storedValue !== []){
                const item = getFromCache(identifier)
                setResult(item)
            }
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

    // bg-zinc-600
    return(
        <div className="bg-indigo-600 h-16 w-full top-16 p-2 flex">
            <SearchBar handleCallback = {searchCallback}/>
            <LocationDropdown handleCallback = {locationCallback}/>
            <DistanceDropdown handleCallback = {distanceCallback}/>
            <PriceDropdown handleCallback = {priceCallback}/>
            <SearchButton onClick = {search}/>
        </div>
    )
};

export default Navbar;