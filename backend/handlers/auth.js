const user = require('../utils/userUtil');

module.exports.handler = async (event) => {

    const requestBody = JSON.parse(event.body);
    try{
        const jwt = await user.checkUser(requestBody);      // make this return jwt 

        if(jwt === undefined){     
            return{
                statusCode: 401
            }
        }

        return {
            statusCode: 200,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
                'Access-Control-Allow-Credentials': true,
                // 'Set-Cookie': `jwt=${jwt}; HttpOnly`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jwt,null,2),
        }
    } catch(error){
        console.log(error)
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}