import React, {useState} from "react";
import { Link } from "react-router-dom";

function SignUpForm(){
    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [submitted,setSubmitted] = useState(false)

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
            const response = await fetch('http://localhost:3000/signup',{      // change on deployment & commits
                method: 'POST', 
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const res = await response.json();
            console.log(res)
            // store jwt in cookies 
            setSubmitted(true)

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
                    Sign Up
                </h3>
                <h4 className="text-lg">
                    Already have an account? <Link to = "/login" className="font-bold text-purple-700" >Sign In</Link>     
                </h4>
            </div>
            <form className="w-96 justify-center items-center h-fit"
                onSubmit={handleSubmit}>
                <div className="flex">
                <input
                    type="text"
                    name="firstName"
                    className="block w-44 px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
                        mx-2"
                    placeholder="First Name"
                    onChange = {handleInputChange}
                    value={formData.firstName}
                    />
                <input
                    type="text"
                    name="lastName"
                    className="block w-44 px-4 py-2 bg-white border rounded-md
                        focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Last Name"
                    onChange = {handleInputChange}
                    value={formData.lastName}
                    />
                </div>
                
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
            <button type="submit" className=" text-white bg-purple-700 border-l rounded p-2 h-10">Sign Up</button>
            </form>
            
        </div>
    </div>
)
}

export default SignUpForm;