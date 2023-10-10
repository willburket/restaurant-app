require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const axios = require('axios');

const knex = require("knex")({
    client: 'mysql',
    connection:{
        host : process.env.HOST,
        port : process.env.PORT,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.USER_TABLE,
    }
    
});

exports.saveUser = async (user) => {

    const saltRounds = 10;

    try{
        const hash = await bcrypt.hash(user.password,saltRounds);
        const dbUser = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password_hash: hash,
        }
        
        const userId = await knex(process.env.USER_TABLE).insert(dbUser)
        const payload = { userId: userId, username: user.email };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        return token 
    }catch(error){
        console.log("Error saving user:",error);
        return     
    }
}

exports.checkUser = async (user) =>{
    
    try{
        const res = await knex(process.env.USER_TABLE).select('id','email','password_hash').where('email', user.email);
        
        const match = await bcrypt.compare(user.password, res[0].password_hash);
        if(!match) {
            // password incorrect
            return 
        }

        const payload = { userId: res[0].id, username: res[0].email };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        // knex destroy?
        // knex.destroy(); 
        return token   
           
    }catch(error){
        console.log('Error checking user:', error)
    }
}

exports.savePlace = async (user,place) => {
    try{
        const savedPlace = {
            user_id: user,
            place_id: place,
        }
        await knex(process.env.RESTAURANTS_TABLE).insert(savedPlace)        //fix this 
    }catch(error){
        console.log('Error saving restaurant:', error);
    }
}

exports.fetchPlaceIds = async (user) => {
    // add like a number of places?
    try{
        const places = await knex(process.env.RESTAURANTS_TABLE)
        .select('place_id').where('user_id',user)
        return places
    } catch(error){
        console.log('Error fetching users saved Restaurants:', error);
    }
}

const fetchPlaceDetails = async (place) => {
    try{

        const details = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&key=${process.env.API_KEY_DEV}`);
        // console.log(details.data.result);
        return details.data.result
    } catch(error){
        console.log('Error fetching place details', error);
    }
    
}

exports.fetchDetailArray = async (places) => {
    try{
        const detail_array = []
        // const details = places.map((place) => fetchPlaceDetails(place));
        for (place of places){
            const details = await fetchPlaceDetails(place)
            detail_array.push(details)
        }
        // console.log(detail_array)
        return detail_array;
    } catch(error){
        console.log('Error fetching detail array', error)
    }
    
}
