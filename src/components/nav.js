import React from 'react'
import { Link } from 'gatsby'

import avatar from '../images/avatar.jpg'
import './nav.module.scss'

const Header = () => {
    return (
        <div className="sidebar">
            <nav>
                <div className="avatar">
                    <img src={avatar}></img>
                    <h2>Chantel Sky</h2>
                </div>
                <ul>
                    <li>hi</li>
                </ul>
            </nav>
            <button>Follow @Chantelsky</button>
            <div className="social-media">
                <ul>
                    <li>hello</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;