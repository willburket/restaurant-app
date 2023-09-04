import React, {useState, useEffect} from "react";
import Select from "react-select";

function PriceDropdown({handleCallback}) {
    const [selected, setSelected] = useState("")

    useEffect(() =>{
      handleCallback(selected)
    }, [selected])

    const options = [
        {value: 1, label: "$"},
        {value: 2, label: "$$"},
        {value: 3, label: "$$$"},
        {value: 4, label: "$$$$"},
    ]

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px', 
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