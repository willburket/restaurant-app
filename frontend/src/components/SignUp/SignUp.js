import React, {useState} from "react";
import SignUpButton from "./SignUpButton";

function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleEmailChange = (event) =>{
        const newText = event.target.value;    
        setEmail(newText);
    }
    const handlePasswordChange = (event) =>{
        const newText = event.target.value;    
        setPassword(newText);
    }
    const handleFirstNameChange = (event) =>{
        const newText = event.target.value;    
        setFirstName(newText);
    }
    const handleLastNameChange = (event) =>{
        const newText = event.target.value;    
        setLastName(newText);
    }

    return(
        <div className="flex top-32 w-full h-full justify-center">
        <div className="flex mt-36 flex-col h-96 w-1/3 justify-center p-2 
        items-center border border-purple-700 rounded-xl">
            <div>
                <h3 className="text-xl font-bold">
                    Sign Up
                </h3>
                <h4 className="text-lg">
                    Already have an account? <a href= "login" className="font-bold text-purple-700">Sign In</a>
                </h4>
            </div>
            <form className="w-96 justify-center items-center h-fit">
                <div className="flex">
                <input
                    type="text"
                    className="block w-44 px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                        mx-2"
                    placeholder="First Name"
                    onChange = {handleFirstNameChange}
                    value={firstName}
                    />
                <input
                    type="text"
                    className="block w-44 px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Last Name"
                    onChange = {handleLastNameChange}
                    value={lastName}
                    />
                </div>
                
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
            <SignUpButton/>
        </div>
    </div>
    )
}

export default SignUp;