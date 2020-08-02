import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom' 

const pageLinks = ({ title, href, type }) => {
    return (
        <div className={style[`${type}-list-item`]}>
            <Link to={href} className={style[`${type}-link`]}>
                {title}
            </Link>
        </div>
    )
}

export default pageLinks