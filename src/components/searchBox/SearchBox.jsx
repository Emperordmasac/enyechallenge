import React from 'react'
import "./SearchBox.css"

function SearchBox({ placeholder }) {
    return (
        <div>
            <input
                className= "search"
                type= "search"
                placeholder ={ placeholder }
            />
        </div>
    )
}

export default SearchBox
