import React from "react";

function Details(props){
    const place = props.item;

    if(place && place !== "no results"){
        return(
            <div className="top-32 w-full">
                {place.name} <br/>
                <img src = {place.icon} key = {place.name}/>
                Rating: {place.rating} <br/>
                Rating Count: {place.user_ratings_total} <br/>
                Address: {place.vicinity} <br/>
            </div>
        )
    }
    else if (place === "no results"){
        return(
            <div className="top-32 w-full">
                No results found 
            </div>
        )
    }
    
}

export default Details;