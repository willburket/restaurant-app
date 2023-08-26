import React, {useState, useEffect} from "react";
import Select from "react-select";
import { getCurrentLocation } from "../../utils/locateUtil";

function LocationDropdown({handleCallback}) {
    const [selected, setSelected] = useState("")
    const [location, setLocation] = useState(null)

    const options = [
        {value: "current", label: "Current Location"},
    ]

    useEffect(() =>{
        handleCallback(location);
    }, [location])

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px', 
          width: '200px',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: '8px', // Adjust padding for indicator to match the height
        }),
    }

    const handleSelectChange = async (target) => {
        setSelected(target)
        if(target.value === 'current'){
            const currentLocation = await getCurrentLocation()
            setLocation(currentLocation)
        }
    }

    return (
        <div className="p-1">
        <Select 
            options = {options}
            value = {selected}
            onChange= {handleSelectChange}
            placeholder = "Location"
            styles={customStyles}/>
        </div>
    )
}


export default LocationDropdown