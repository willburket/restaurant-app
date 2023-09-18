import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

function SignInForm(){
    const {login} = useAuth();
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/auth',{      // change on deployment & commits
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const jwt = await response.json()
            login(jwt);
         
            if(response.ok){
                // change view when we've created an account 
                navigate('/');


            }else{
                console.log(response)
            }

        }catch(error){
            console.log(error)
        }

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
                    New? <Link to = "/signup" className="font-bold text-purple-700" >Sign Up</Link>               
                </h4>
            </div>
            <form className="w-96 justify-center items-center h-fit"
                onSubmit={handleSubmit}>
                
                 <input
                    type="text"
                    name="email"
                    className="block w-full px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                        my-2"
                    placeholder="Email"
                    onChange = {handleInputChange}
                    value={formData.email}
                    />
                <input
                    type="text"
                    name="password"
                    className="block w-full px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                        my-2"
                    placeholder="Password"
                    onChange = {handleInputChange}
                    value={formData.password}
                    />
            <button type="submit" className=" text-white bg-purple-700 border-l rounded p-2 h-10">Sign In</button>
            </form>
            
        </div>
    </div>
)
}

export default SignInForm;