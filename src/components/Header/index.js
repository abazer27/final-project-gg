import React from 'react'
import style from './style.module.css'
function Header() {
    return (
        <div>
            <div className={style.title}>
                <h1 className={style.spotify}>Spoti<span className={style.dev}>Dev</span></h1>
            </div>
        </div>
    )
}

export default Header
