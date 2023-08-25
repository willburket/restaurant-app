import React from "react";

function SearchBar() {
    return (
        <div className="flex items-center px-1">
            <div className="flex rounded h-10">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md
                     focus:border-purple-400 focus:ring-purple-300 focus:outline-none 
                    focus:ring focus:ring-opacity-40"
                    placeholder="Type of food..."
                />
            </div>
        </div>
    );
}

function SearchButton(){
    return(
        <div className="p-1">
            <button className=" text-white bg-purple-600 border-l rounded px-2 h-10">
                Search
            </button>
        </div>
        
    )
}

export { SearchBar, SearchButton }