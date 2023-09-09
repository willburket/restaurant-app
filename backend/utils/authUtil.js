
exports.checkUser = async (username, password) => {
        //... fetch user from a db etc.
    
        const match = await bcrypt.compare(password, user.passwordHash);
    
        if(match) {
            //login
            return true 
        }else{
            return false 
        }
        
        //...
}



