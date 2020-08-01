import React from 'react'
import style from './index.module.css'
import Link from '../link'
import image from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {
    return (
        <footer className={style.container}>
            <div>
                <Link href='#' title='Going to 1' type='footer'/>
                <Link href='#' title='Going to 2' type='footer'/>
                <Link href='#' title='Going to 3' type='footer'/>
                <Link href='#' title='Going to 4' type='footer'/>
                <Link href='#' title='Going to 5' type='footer'/>
                <Link href='#' title='Going to 6' type='footer'/>
                <Link href='#' title='Going to 7' type='footer'/>
                <Link href='#' title='Going to 8' type='footer'/>
                <img src={image} alt="" className={style.logo}/>
            </div>
                <p className={style.license}>Software University &#174; 2020</p>
        </footer>
    )
}

export default Footer