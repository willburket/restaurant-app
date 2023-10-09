import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";


function SaveButton(props){
    const {jwt} = useAuth();
    const place = props.item;
    const [saved, setSaved] = useState(false);
    const url = process.env.REACT_APP_API_URL;
    // const [place, setPlace] = useState()

    useEffect(()=>{
        setSaved(false);
    }, [place])

    const saveItem = async () =>{

        if(!jwt){
            alert("Please sign in to save this restaraunt") // when we go to sign in restaraunt is lost 
        }else{
            try{
                const token = JSON.stringify(jwt);
                const response = await fetch(`${url}/saved`,{      // change on deployment & commits
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(place.place_id),
                });
                setSaved(true)
                
            }catch(error){
                console.log("Error saving restaurant", error);
            }
            
        }

    }
    if(props.item){
        return(
            <button onClick = {saveItem} className="text-white bg-purple-700 border-l rounded p-2 h-10 right-1/3 m-2">
                {saved ? 'Saved' : 'Save'}
            </button>
        )
    }
}

export default SaveButton;