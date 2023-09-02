import React, { useEffect } from "react";
import { initMap } from "../../utils/placesUtil";

function Map (props){
    const location = props.location;
    const restaurant = props.restaurant;

    useEffect(() => {
        if(location && restaurant){
            const lat = location.lat
            const lon = location.lon
    
        initMap(lat,lon,restaurant)        // shouldn't need to init every time, just update pin?
        // clear map if no results
        }
    }, [restaurant])

    
    return(
        <div className="h-96 w-96" id= "map">
        </div>
    )
    
}

export default Map;