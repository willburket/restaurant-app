import React, {useState} from "react";
import Select from "react-select";

// function PriceDropdown() {
//     const [selected, setSelected] = useState("")

//     const handleSelectChange = (event) => {
//         setSelected(event.target.value)
//     }

//     return (
//         <div className="relative w-32 px-2">
//             <select value = {selected} onChange = {handleSelectChange} 
//             className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm 
//             outline-none appearance-none focus:border-indigo-600">
//                 <option value = "" disabled hidden>Price Range</option>
//                 <option value = "1">$</option>
//                 <option value = "2">$$</option>
//                 <option value = "3">$$$</option>
//                 <option value = "4">$$$$</option>
//             </select>
//         </div>
//     );
// }    focus:ring-purple-300

function PriceDropdown() {
    const [selected, setSelected] = useState("")

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