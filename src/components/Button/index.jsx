import React from 'react';
import style from './style.module.css';

function Button() {
    return (
        <div className={style.btnWrapper}>
            <button className={style.btn} type="button">ADD MORE</button>
        </div>
    )
}

export default Button
