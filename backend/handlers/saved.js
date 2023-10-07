const user = require('../utils/userUtil');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.handler = async (event) => {
    try{
        const method = event.requestContext.http.method;
        const requestBody = JSON.parse(event.body);

        const token = requestBody.jwt;
        const place = requestBody.place;

        if(token === undefined){     
            return{
                statusCode: 401
            }
        }
        // check if jwt is valid 
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err){
                return{
                    statusCode: 401
                }
            } else{
                const userId = decoded.userId;
                console.log('User', userId);
                if (method === 'GET') {
                    // get database items 
                    // return 200 & items in body
                } else if (method === 'POST') {
                    console.log("place id", place);
                    user.savePlace(userId,place);
                    // post to database 
                    // return 200 
                }   
            }
        })
        
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