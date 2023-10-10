const user = require('../utils/userUtil');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.handler = async (event) => {
    try{
        const method = event.requestContext.http.method;
        const token = event.headers['authorization'].slice(8,-1);
        let userId = null;

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
            } 
            userId = decoded.userId;
        })
           
        console.log('User', userId);
        if (method === 'GET') {
            const place_ids = []
            const places = await user.fetchPlaceIds(userId)         // need to paginate
            
            places.forEach(element => {
                place_ids.push(element.place_id) 
            });

            const details = await user.fetchDetailArray(place_ids)      
        
            return {
                statusCode: 200,
                headers:{
                    'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            }
           
        } else if (method === 'POST') {
            const place = event.body; 
            user.savePlace(userId,place);
            return {
                statusCode: 200,
                headers:{
                    'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json',
                },
            }   
        }

    } catch(error){
        console.log(error)
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}