import Head from "./components/Head/Head";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Account from "./pages/Account";
import SignInPage from "./pages/SignInPage";

function App() {

  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = 'account' element = {<Account/>}/>
        <Route path = 'login' element = {<SignInPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
