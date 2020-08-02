import React from 'react'
import style from './index.module.css'
import Link from '../link'
import image from '../../images/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation.js'

const Footer = () => {
    const navLinks = getNavigation()
    return (
        <footer className={style.container}>
            <div>
                {
                    navLinks.map((nav) => {
                        return (
                            <Link 
                                key={nav.title} 
                                href={nav.link} 
                                title={nav.title} 
                                type='footer'
                            />
                        )
                    })
                }
                <img src={image} alt="" className={style.logo}/>
            </div>
                <p className={style.license}>Software University &#174; 2020</p>
        </footer>
    )
}

export default Footer