import React from 'react'
import { Link } from 'gatsby'
import Social from '../components/social'

import avatar from '../images/avatar.jpg'
import './nav.module.scss'

const Header = () => {
    return (
        <div className="sidebar">
            <nav>
                <img class="avatar" src={avatar} alt="Chantel"></img>
                <h2>Chantel Sky</h2>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="https://chantelsky.netlify.com" target="_blank" rel="noopener">Portfolio</Link></li>
                </ul>
                <Social />
            </nav>
        </div>
    )
}

export default Header;