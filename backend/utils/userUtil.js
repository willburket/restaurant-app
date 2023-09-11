require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

exports.saveUser = async (user) =>{

    const password = user.password;
    const saltRounds = 10;
    const secretKey = process.env.SECRET_KEY;

    try{
        const hash = await bcrypt.hash(password,saltRounds);
        const dbUser = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password_hash: hash,
        }
        
        const userId = await knex(process.env.USER_TABLE).insert(dbUser)
        const payload = { userId: userId, username: user.email };
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        return token 
    }catch(error){
        console.log(error);
        return     
    }
}
