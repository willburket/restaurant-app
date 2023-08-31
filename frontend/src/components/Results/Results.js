import React from "react";
import Map from "./Map";
import Details from "./Details";

function Results (props){
    const restaurant = props.restaurant;
    const location = props.location;

    return(
        <div className="flex">
            <Details item = {restaurant} />
            <Map location = {location} restaurant = {restaurant}/>
        </div>
    )
}

export default Results;