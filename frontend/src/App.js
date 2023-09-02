import Head from "./components/Head/Head";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { loadGoogle } from "./utils/placesUtil";
import Results from "./components/Results/Results";

function App() {

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
      <Head/>
      <Navbar handleCallback = {searchCallback} locateChange={locationCallback}/>
      <Results location = {location} restaurant = {restaurant}/>
    </div>
  );
}

export default App;
