import React from 'react'
import style from './index.module.css'

const Origami = ({ description, author }) => {
    return (
        <div className={style.container}>
            <p className={style.description}>
                {description}
            </p>
            <div>
                <span className={style.author}>
                    <small>Author:</small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origami