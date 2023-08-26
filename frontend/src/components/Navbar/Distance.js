import React, {useState} from "react";
import Select from "react-select";

function DistanceDropdown() {
    const [selected, setSelected] = useState("")

    const options = [
        {value: "0.25", label: "0.25 Miles"},
        {value: "0.5", label: "0.5 Miles"},
        {value: "1", label: "1 Mile"},
        {value: "5", label: "5 Miles"},
        {value: "10", label: "10 Miles"},
        {value: "25", label: "25 Miles"},
        {value: "50", label: "50 Miles"},
    ]

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px', // Change the minimum height to 40px
          width: '175px',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: '8px', // Adjust padding for indicator to match the height
        }),
      };

    const handleSelectChange = (target) => {
        setSelected(target)
    }

    return (
        <div className="p-1">
        <Select 
            options = {options}
            value = {selected}
            onChange= {handleSelectChange}
            placeholder = "Max Distance"
            styles={customStyles}/>
        </div>
    )
}


export default DistanceDropdown;