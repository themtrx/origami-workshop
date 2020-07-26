import React from 'react'
import style from './index.module.css'
import Link from '../link'

const Header = () => {
    return (
        <header className={style.navigation}>
            <ul>
                <Link href="#" title="Going to 1" type='header'/>
                <Link href="#" title="Going to 2" type='header'/>
                <Link href="#" title="Going to 3" type='header'/>
                <Link href="#" title="Going to 4" type='header'/>
                <Link href="#" title="Going to 5" type='header'/>
                <Link href="#" title="Going to 6" type='header'/>
                <Link href="#" title="Going to 7" type='header'/>
                <Link href="#" title="Going to 8" type='header'/>
                <Link href="#" title="Going to 9" type='header'/>
                <Link href="#" title="Going to 10" type='header'/>
                <Link href="#" title="Going to 11" type='header'/>
            </ul>
        </header>
    )
}

export default Header;