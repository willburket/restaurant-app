require('dotenv').config();

module.exports.handler = async (event) => {
    try{
        const apiKey = process.env.API_KEY_DEV;

        return {
            statusCode: 200,
            body: JSON.stringify(
                {message: {apiKey}},
                null,
                2
            )
            };
    } catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify(
                error.message
            )
        }
    }      
};