import React,{ useEffect, useState } from "react";
import { fetchSavedPlaces } from "../../utils/userUtil";
import { useAuth } from "../../hooks/useAuth";

function Places({handleCallback}){
    const {jwt} = useAuth();
    const [savedPlaces, setSavedPlaces] = useState(null)
    const [place,setPlace] = useState(null)
    // infinite scroll? 
    useEffect(() => {
        fetchSavedPlaces(jwt)           // make this so you can input which page you need
        .then((places) => setSavedPlaces(places));
    }, [])

    useEffect(() => {        
        handleCallback(place)
    }, [place])

    const selectPlace = (item) => {
        setPlace(item)
    }
    
    if (jwt === null){
        return(
            <div>
                Please Sign In
            </div>
        )
    }

    if (savedPlaces){
        return(
            <div className = "w-1/4 border-r-2 h-[calc(100vh-128px)]">
                {savedPlaces.map((item, index) => (
                <button className = "w-full text-purple-900 bg-white rounded p-2 h-10 border-b-2 truncate" 
                key={index} onClick={() => selectPlace(item)}>{item.name}</button>
                ))}
            </div>
        )
    }
    
}

export default Places;