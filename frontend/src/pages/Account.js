import { useState } from "react";
import Nav from "../components/Saved/Nav";
import Places from "../components/Saved/Places";
import Details from "../components/Saved/Details";

function Account (){
    const [place,setPlace] = useState(null)

    const placeCallback = (data) =>  {
        setPlace(data)
        console.log(place)
    }

    return(
        <div>
            <Nav/>
            <div className="flex">
            <Places handleCallback={placeCallback}/>
            <Details place = {place}/>
            </div>
            
        </div>
    )
}

export default Account;