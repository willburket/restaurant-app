import React from "react";

function Details(props){
    const place = props.item;
    if(place){
        return(
            <div className="top-32 w-full">
                {place.name}
                {place.icon}
                {place.rating}
                {place.user_ratings_total}
                {place.vicinity}
            </div>
        )
    }
    
}

export default Details;