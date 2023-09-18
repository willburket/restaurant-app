import React,{ useEffect } from "react";
import { fetchSavedPlaces } from "../../utils/userUtil";
import { useAuth } from "../../hooks/useAuth";

function Places(props){
    const {jwt} = useAuth();
    // fetch places id's from backend
    // fetch place details from google 
    // infinite scroll? 
    
    if (jwt === null){
        return(
            <div>
                Please Sign In
            </div>
        )
    }
    
    fetchSavedPlaces(jwt);
    
    return(
        <div></div>
    )
}

export default Places;