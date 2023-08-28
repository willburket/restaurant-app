import Head from "./components/Head/Head";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { loadMap } from "./utils/placesUtil";
import Details from "./components/Results/Details";

function App() {

  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    loadMap()
  },[])

  const searchCallback = (data) =>{
    console.log("app callback")
    console.log(data)
    setRestaurant(data)
  }


  return (
    <div className="App">
      <Head/>
      <Navbar handleCallback = {searchCallback}/>
      <Details item = {restaurant}/>
    </div>
  );
}

export default App;
