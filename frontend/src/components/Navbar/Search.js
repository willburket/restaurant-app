import React from "react";

function SearchBox() {
    return (
        <div className="flex items-center p-2">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
}

function SearchButton(){
    return(
        <button className=" text-white bg-purple-600 border-l rounded px-3 h-11">
        Search
        </button>
    )
}

export { SearchBox, SearchButton }