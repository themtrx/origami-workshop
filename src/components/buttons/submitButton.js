import React from 'react'
import style from './index.module.css'

const SubmitButton = ({name}) => {
    return (
        <button className={style.submitButton}>{name}</button>
    )
}

export default SubmitButton