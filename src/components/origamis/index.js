import React from 'react'
import style from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origami = ({ description, author, index }) => {
    return (
        <div className={style.container}>
            <img src={image} alt="" className={style['origami-img']}/>
            <p className={style.description}>
            <span>{index} -</span>
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