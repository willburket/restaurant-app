const user = require('../utils/userUtil');

module.exports.handler = async (event) => {

    
    try{
        const token = event.headers;
        console.log(token);

        if(token === undefined){     
            return{
                statusCode: 401
            }
        }

        return {
            statusCode: 200,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json',
            },
        }
        
    } catch(error){
        console.log(error)
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}