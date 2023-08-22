module.exports.handler = async (event) => {
    try{
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                message: 'server configured successfully!',
                input: event,
                },
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