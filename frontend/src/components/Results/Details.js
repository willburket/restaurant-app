import React, {useEffect, useState} from "react";
import { fetchPlaceDetails } from "../../utils/placesUtil";

function Details(props){
    const place = props.item;
    const [details, setDetails] = useState({});

    useEffect(() => {
        if(place && place !== "no more results" && place !== "no results"){
            const placeId = place.place_id;
            fetchPlaceDetails(placeId).then(result => {
            setDetails(result)
            // set loading? 
        });
        }
    }, [place])
    
    if(place && place !== "no more results" && place !== "no results"){      // fix this, use undef and null instead
        
        return(
            <div className="top-32 w-1/3 h-full">
                <h2 className="text-3xl font-bold">{place.name}</h2><br/>
                <img src = {place.icon} key = {place.name}/>
                <h2 className = "text-xl font-bold">Rating:</h2>{place.rating}<br/>
                <h2 className = "text-xl font-bold">Rating Count:</h2>{place.user_ratings_total}<br/>
                <h2 className = "text-xl font-bold">Address:</h2> {place.vicinity}<br/>
            </div>
        )
    }
    else if (place === "no results"){
        return(
            <div className="top-32 w-1/3 h-full">
                No results found 
            </div>
        )
    }
    else if (place === undefined){
        return(
            <div className="top-32 w-1/3 h-full">
                No more results
            </div>
        )
    }
    
}

export default Details;