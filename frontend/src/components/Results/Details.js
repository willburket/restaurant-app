import React from "react";

function Details(props){
    const place = props.item;

    if(place && place !== "no more results" && place !== "no results"){
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