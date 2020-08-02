import React from 'react'
import style from './index.module.css'

const Input = ({label, type, name, value, onChange}) => {
    return (
        <div className={style['form-control']}>
            <label className={style['form-label']} htmlFor={name}>{label}</label>
            <input className={style['input-field']} type={type} name={name} id={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input