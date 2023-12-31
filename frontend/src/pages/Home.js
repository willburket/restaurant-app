import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Results from "../components/Results/Results";
import { loadGoogle } from "../utils/placesUtil";


function Home() {

  const [restaurant, setRestaurant] = useState(null)
  const [location, setLocation] = useState(null)
  
  useEffect(() => {
    loadGoogle()
  },[])

  const searchCallback = (data) =>{
    setRestaurant(data)
  }
  const locationCallback = (data) =>{
    setLocation(data)
  }

  return (
    <div className="App">
      <Navbar handleCallback = {searchCallback} locateChange={locationCallback}/>
      <Results location = {location} restaurant = {restaurant}/>
    </div>
  );
}

export default Home;
