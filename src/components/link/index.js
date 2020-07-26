import React from 'react'
import style from './index.module.css'

const Link = ({ title, href }) => {
    return (
        <li className={style['list-item']}>
            <a href={href} className={style['header-link']}>
                {title}
            </a>
        </li>
    )
}

export default Link