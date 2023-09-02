import Head from "./components/Head/Head";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";

function App() {


  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        {/* <Route path ='/account' element = {<Account/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
