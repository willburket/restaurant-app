import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function SaveButton(props){
    const {jwt} = useAuth();
    const [saved, setSaved] = useState(false);

    const saveItem = () =>{
        if(!jwt){
            alert("Please sign in to save this restaraunt") // when we go to sign it restaraunt is lost 
        }else{
            setSaved(true)
            // save to database
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