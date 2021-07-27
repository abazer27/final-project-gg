import React from 'react'

function Button({value, handleSelect}) {
    return (
        <button type="submit" onClick={handleSelect}>{value}</button>
    )
}

export default Button
