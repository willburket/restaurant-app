import React, {useState} from "react";

function PriceDropdown() {
    const [selected, setSelected] = useState("")

    const handleSelectChange = (event) => {
        setSelected(event.target.value)
    }

    return (
        <div className="relative w-32">
            <select value = {selected} onChange = {handleSelectChange} 
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm 
            outline-none appearance-none focus:border-indigo-600">
                <option value = "" disabled hidden>Price Range</option>
                <option value = "1">$</option>
                <option value = "2">$$</option>
                <option value = "3">$$$</option>
                <option value = "4">$$$$</option>
            </select>
        </div>
    );
}

export { PriceDropdown }