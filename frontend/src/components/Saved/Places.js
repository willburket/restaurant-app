import React,{ useEffect } from "react";
import { fetchSavedPlaces } from "../../utils/userUtil";
import { useAuth } from "../../hooks/useAuth";

function Places(props){
    const {jwt} = useAuth();
    
    
    useEffect(()=>{
        console.log("Places JWT:", jwt);
    }, [jwt])
    // fetchSavedPlaces();
    
    return(
        <div></div>
    )
}

export default Places;