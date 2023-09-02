import React, { useEffect } from "react";
import { initMap,createMarker } from "../../utils/placesUtil";

function Map (props){
    const location = props.location;
    const restaurant = props.restaurant

    useEffect(() => {
        if(location && restaurant){
            const lat = location.lat
            const lon = location.lon

            const restLat = restaurant.geometry.location.lat()
            const restLon = restaurant.geometry.location.lng()
            const current = "You"
            const name = restaurant.name
    
        const map = initMap(lat,lon,restaurant)        // shouldn't need to init every time, just update pin
        createMarker(map,lat,lon,current);     // creates marker at your location
        createMarker(map,restLat,restLon,name); // create marker at restaurant 

        }
    }, [restaurant])

    
    return(
        <div className="h-96 w-96" id= "map">
        </div>
    )
    
}

export default Map;