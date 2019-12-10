import React from 'react'
import { Link } from 'gatsby'

import avatar from '../images/avatar.jpg'
import './nav.module.scss'

const Header = () => {
    return (
        // <nav class="menu">
        //     <ul>
        //         <li><Link to="/">Blog</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="https://chantelsky.netlify.com" target="_blank" norel="noopener">Portfolio</Link></li>
        //     </ul>
        // </nav>
        <nav className="menu">
            <header className="avatar">
                <img src={avatar}></img>
                <h2>Chantel Sky</h2>
            </header>
            <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="https://chantelsky.netlify.com" target="_blank" norel="noopener">Portfolio</Link></li>
            </ul>
        </nav >
    )
}

export default Header;