export const fetchSavedPlaces = async () => { 
    try{
        const response = await fetch('http://localhost:3000/saved',{      // change on deployment & commits
            method: 'GET', 
            header: {
                'Content-Type': 'application/json',
            },
        });
        const res = await response.json()
        console.log(res)

    }catch(error){
        console.log(error)
    }
}