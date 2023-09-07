import React, {useState} from "react";
import SignInButton from "./SignInButton";

function SignIn(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) =>{
        const newText = event.target.value;    
        setEmail(newText);
    }
    const handlePasswordChange = (event) =>{
        const newText = event.target.value;    
        setPassword(newText);
    }


    return(
        <div className="flex top-32 w-full h-full justify-center">
            <div className="flex mt-36 flex-col h-96 w-1/3 justify-center p-2 
            items-center border border-purple-700 rounded-xl">
                <div>
                    <h3 className="text-xl font-bold">
                        Sign In
                    </h3>
                    <h4 className="text-lg">
                        New? <a href= "signup" className="font-bold text-purple-700">Sign Up</a>
                    </h4>
                </div>
                <form className="w-96 justify-center items-center h-fit">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 bg-white border rounded-md
                            focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                            my-2"
                        placeholder="Email"
                        onChange = {handleEmailChange}
                        value={email}
                        />
                    <input
                        type="text"
                        className="block w-full px-4 py-2 bg-white border rounded-md
                            focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                            my-2"
                        placeholder="Password"
                        onChange = {handlePasswordChange}
                        value={password}
                        />
                </form>
                <SignInButton/>
            </div>
        </div>
        
    )
}

export default SignIn;