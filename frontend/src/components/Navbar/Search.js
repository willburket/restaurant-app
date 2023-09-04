import React, {useState} from "react";

function SearchBar({handleCallback}) {
    const [search, setSearch] = useState('')

    const handleInputChange = (event) =>{
        const newText = event.target.value;
        setSearch(newText)
        handleCallback(search)
    }
    const handlePaste = (event) =>{         //need to figure this out
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text/plain');
        setSearch(pastedText)
    }

    return (
        <div className="flex items-center px-1">
            <div className="flex rounded h-10">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md
                     focus:border-blue-400 focus:outline-none 
                    focus:ring focus:ring-opacity-40"
                    placeholder="Type of food..."
                    onChange = {handleInputChange}
                    value={search}
                    onPaste={handlePaste}
                />
            </div>
        </div>
    );
}

function SearchButton(props){
    const onClick = props.onClick;

    return(
        <div className="p-1">
            <button onClick = {onClick} className=" text-white bg-purple-700 border-l rounded px-2 h-10">
                Search
            </button>
        </div>
        
    )
}

export { SearchBar, SearchButton }