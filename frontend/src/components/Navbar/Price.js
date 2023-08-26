import React, {useState, useEffect} from "react";
import Select from "react-select";

function PriceDropdown({handleCallback}) {
    const [selected, setSelected] = useState("")

    useEffect(() =>{
      handleCallback(selected)
    }, [selected])

    const options = [
        {value: "1", label: "$"},
        {value: "2", label: "$$"},
        {value: "3", label: "$$$"},
        {value: "4", label: "$$$$"},
    ]

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px', // Change the minimum height to 40px
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
        <div className="p-1 w-40">
        <Select 
            options = {options}
            value = {selected}
            onChange= {handleSelectChange}
            placeholder = "Price range"
            styles={customStyles}/>
        </div>
    )
}


export { PriceDropdown }