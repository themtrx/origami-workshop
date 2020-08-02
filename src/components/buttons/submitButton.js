import React from 'react'
import style from './index.module.css'

const SubmitButton = ({name, type}) => {
    return (
        <button type={type} className={style.submitButton}>{name}</button>
    )
}

export default SubmitButton