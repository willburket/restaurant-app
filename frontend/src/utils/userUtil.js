export const fetchSavedPlaces = async (token) => { 
        const jwt = JSON.stringify(token);
    try{
        const response = await fetch('http://localhost:3000/saved',{      // change on deployment & commits
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });
        const res = await response.json()
        console.log(res)

    }catch(error){
        console.log(error)
    }
}