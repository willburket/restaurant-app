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
        return token   
           
        

    }catch(error){
        console.log('Error fetching user:',error)
    }
}

