const userDB = require('../utils/userUtil');

module.exports.handler = async (event) => {
    // hash password (brcypt)
    // save user object in database 
    // json web token???
    const requestBody = JSON.parse(event.body);
    try{
        console.log(requestBody)
        userDB.saveUser(requestBody)
        // const password = requestBody.password
        // const saltRounds = 10

        // bcrypt.hash(password, saltRounds, function(err, hash) {
        //     if(err){
        //         console.log('Error hashing password:', err)
        //     } else{
        //         user = {
        //             first_name: requestBody.firstName,
        //             last_name: requestBody.lastName,
        //             email: requestBody.email,
        //             password_hash: hash,
        //         }
        //         userDB.saveUser(user);
        //         // save using util
        //             // need to make sure email is not already registered?
        //     }
                
        // });

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