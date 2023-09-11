const userDB = require('../utils/userUtil');

module.exports.handler = async (event) => {
    
    const requestBody = JSON.parse(event.body);
    try{
        const token = await userDB.saveUser(requestBody);

        if(token === undefined){
            return {
                statusCode: 409,
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
        console.log(error)
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}