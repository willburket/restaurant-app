import React, { useEffect } from "react";
import { initMap,createMarker } from "../../utils/placesUtil";

function Map (props){
    const location = props.location;
    const restaurant = props.restaurant

    useEffect(() => {
        if(location){
            const lat = location.lat
            const lon = location.lon
            const current = "You"
    
        const map = initMap(lat,lon,restaurant)        // shouldn't need to init every time, just update pin
        // createMarker(map,lat,lon,current);     // creates marker at your location
        }
    }, [restaurant])

    
    return(
        <div className="h-96 w-96" id= "map">
        </div>
    )
    
}

export default Map;