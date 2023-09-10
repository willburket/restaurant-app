require('dotenv').config();
const bcrypt = require('bcrypt');

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

    const password = user.password
    const saltRounds = 10

    try{
        const hash = await bcrypt.hash(password,saltRounds);
        const dbUser = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password_hash: hash,
        }
        console.log(hash)
        
        await knex(process.env.USER_TABLE).insert(dbUser);
        const res = await knex(process.env.USER_TABLE).select();
        console.log(res);

    }catch(error){
        console.log(error);
        // check for duplicate entry error 
    }
}
