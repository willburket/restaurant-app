import React, { useEffect } from "react";
import { initMap } from "../../utils/placesUtil";

function Map (props){
    const location = props.location;
    const restaurant = props.restaurant;

    const mapStyle = {
        width: 'calc(2/3 * 100vw)',
        height: 'calc(100vh - 128px)',
      };

    useEffect(() => {
        if(location && restaurant !== undefined && restaurant !== "no results"){
            const lat = location.lat
            const lon = location.lon
    
        initMap(lat,lon,restaurant)        // shouldn't need to init every time, just update pin?
        // clear map if no results
        }
    }, [restaurant])

    if(restaurant){
        return(
            // <div className="h-96 w-96" id= "map"/>
            <div id= "map" style={mapStyle}/>
        )
    }
    
}

export default Map;