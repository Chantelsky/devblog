import React from 'react'
import { Link } from 'gatsby'

import avatar from '../images/avatar.jpg'
import './nav.module.scss'

const Header = () => {
    return (
        <div className="sidebar">
            <nav>
                <div className="avatar">
                    <img src={avatar} alt="Chantel"></img>
                    <h2>Chantel Sky</h2>
                </div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="https://chantelsky.netlify.com" target="_blank" rel="noopener">Portfolio</Link></li>
                </ul>
                <div className="social-media">
                    <Link to="https://twitter.com/Chantel_sky" target="_blank" rel="noopener"><button type="submit">Follow @chantelsky</button></Link>
                    <ul>
                        <li>hello</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;