import React from 'react'
import style from './index.module.css'

const Link = ({ title, href, type }) => {
    return (
        <li className={style[`${type}-list-item`]}>
            <a href={href} className={style[`${type}-link`]}>
                {title}
            </a>
        </li>
    )
}

export default Link