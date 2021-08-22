import React from 'react';
import style from './style.module.css'

function Button({value, handleSelect}) {
    return (
        <button className={style.btn} type="submit" onClick={handleSelect}>{value}</button>
    )
}
export default Button
