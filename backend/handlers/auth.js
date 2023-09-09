const auth = require("../utils/authUtil")

module.exports.handler = async (event) => {
    // de-hash? password (brcypt)
    // check if email and password match
    // json web token???
    const requestBody = JSON.parse(event.body);
    try{
        // get username, password
        const username = requestBody.email;
        const password = requestBody.password;
        console.log(password)
        const userCheck = false
        // const userCheck = auth.checkUser(username, password);

        if(userCheck){
            // json web token 
        }else{
            return{
                statusCode: 401
            }
        }



        const response = {
            statusCode: 200,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
            },
        }
        return response;
    } catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}