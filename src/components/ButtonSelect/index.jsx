import React from 'react';
import style from './style.module.css'

function Button({value, handleSelect}) {
    return (
        <div className={style.btnWrapper}>
            <button className={style.btn} type="submit" onClick={handleSelect}>{value}</button>
        </div>
    )
}
export default Button
