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
        return res

    }catch(error){
        console.log(error)
    }
}

export const savePlace = async (token,place) => {
    const placeId = JSON.stringify(place);
    const jwt = JSON.stringify(token);
    try{
        const response = await fetch('http://localhost:3000/saved',{      // change on deployment & commits
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: placeId,
        });
        const res = await response.json()       // may not be necessary 

    }catch(error){
        console.log(error)
    }
}