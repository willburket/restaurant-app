import React,{ useEffect, useState } from "react";
import { fetchSavedPlaces } from "../../utils/userUtil";
import { useAuth } from "../../hooks/useAuth";

function Places(props){
    const {jwt} = useAuth();
    const [savedPlaces, setSavedPlaces] = useState(null)
    // infinite scroll? 
    useEffect(() => {
        fetchSavedPlaces(jwt)
        .then((places) => setSavedPlaces(places));
    }, [])

    useEffect(() => {
        console.log(savedPlaces)
    }, [savedPlaces])
    
    if (jwt === null){
        return(
            <div>
                Please Sign In
            </div>
        )
    }
    
    
    
    return(
        <div></div>
    )
}

export default Places;