import React from 'react'
import style from './index.module.css'
import Link from '../link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation.js'

const Header = () => {
    const navLinks = getNavigation()
    return (
        <header className={style.navigation}>
            <div>
                <img src={logo} alt="" className={style.logo}/>

                {
                    navLinks.map((nav) => {
                        return (
                            <Link 
                                key={nav.title}
                                href={nav.link}
                                title={nav.title}
                                type='header'
                            />
                        )
                    })
                }
            </div>
        </header>
    )
}

export default Header;