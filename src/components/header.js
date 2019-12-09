import React from 'react'
import { Link } from 'gatsby'
//when I add the CSS import '../components/header.module.scss'

const Header = () => {
    return (
        <div>
            <header>
                <h1>Just Another DEV Blog</h1>
                <p>A personal website dedicated to helping other developers and my future-self.</p>
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="https://chantelsky.netlify.com" target="_blank" norel="noopener">Portfolio</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;