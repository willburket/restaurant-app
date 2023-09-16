import Head from "./components/Head/Head";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Account from "./pages/Account";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { JwtProvider } from "./context/JwtProvider";

function App() {

  return (
    <div className="App">
      <Head/>
      <JwtProvider>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'account' element = {<Account/>}/>
          <Route path = 'login' element = {<SignInPage/>}/>
          <Route path = 'signup' element = {<SignUpPage/>}/>
        </Routes>
      </JwtProvider>
    </div>
  );
}

export default App;
