const user = require('../utils/userUtil');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.handler = async (event) => {

    try{
        const token = event.headers['authorization'].slice(8,-1);

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
                console.log(userId);
                // take userId and query saved items dB for restaraunts 
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