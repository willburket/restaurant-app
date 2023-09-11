const user = require('../utils/userUtil');

module.exports.handler = async (event) => {

    const requestBody = JSON.parse(event.body);
    
    try{
        const token = await user.checkUser(requestBody);      // make this return jwt 
        console.log(token)
        if(token === undefined){     
            return{
                statusCode: 401
            }
        }

        return {
            statusCode: 200,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
            },
            body: JSON.stringify(token,null,2),
        }
        
    } catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}