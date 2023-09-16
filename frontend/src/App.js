import Head from "./components/Head/Head";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Account from "./pages/Account";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./context/AuthProvider";

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Head/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'account' element = {<Account/>}/>
          <Route path = 'login' element = {<SignInPage/>}/>
          <Route path = 'signup' element = {<SignUpPage/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
