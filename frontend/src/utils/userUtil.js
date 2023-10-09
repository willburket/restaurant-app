const url = process.env.REACT_APP_API_URL; 

export const fetchSavedPlaces = async (token) => { 

    const jwt = JSON.stringify(token);
    try{
        const response = await fetch(`${url}/saved`,{      // change on deployment & commits
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });
        const res = await response.json()
        return res

    }catch(error){
        console.log(error)
    }
}

