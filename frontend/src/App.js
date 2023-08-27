import Head from "./components/Head/Head";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { loadMap } from "./utils/placesUtil";

function App() {

  useEffect(() => {
    loadMap()
  },[])

  return (
    <div className="App">
      <Head/>
      <Navbar/>
      
    </div>
  );
}

export default App;
