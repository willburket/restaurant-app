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
          padding: '8px', 
          color: '#7e22ce',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#c084fc' : 'white', // Change the background color on hover
            color: state.isFocused ? 'white' : 'black', // Change the text color on hover
          }),
          menu: (provided) => ({
            ...provided,
            borderColor: '#7e22ce', // Change the border color when the dropdown is open
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