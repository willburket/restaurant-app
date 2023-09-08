module.exports.handler = async (event) => {
    // hash password (brcypt)
    // save user object in database 
    // json web token???
    const requestBody = JSON.parse(event.body);
    try{
        console.log(requestBody)
        const response = {
            statusCode: 200,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3001',     // change later
            },
        }
        return response;
    } catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}