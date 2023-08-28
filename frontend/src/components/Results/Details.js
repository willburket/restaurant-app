import React from "react";

function Details(props){
    const place = props.item;
    if(place){
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
    
}

export default Details;