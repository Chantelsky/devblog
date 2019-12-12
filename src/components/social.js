import React from 'react'
import { Link } from 'gatsby'

import behance from '../images/behance-icon.svg'
import codepen from '../images/codepen-icon.svg'
import github from '../images/github-icon.svg'

const Social = () => {
    return (
        <div className="social-media">
            <Link to="https://twitter.com/Chantel_sky" target="_blank" rel="noopener"><button type="submit">Follow @chantelsky</button></Link>
            <ul>
                <li className="icon"><Link to="https://github.com/Chantelsky" target="_blank" rel="noopener"><img src={github} alt="github-icon"></img></Link></li>
                <li className="icon"><Link to="https://codepen.io/chantel-sky" target="_blank" rel="noopener"><img src={codepen} alt="codepen-icon"></img></Link></li>
                <li className="icon"><Link to="https://www.behance.net/chantelsky" target="_blank" rel="noopener"><img src={behance} alt="behance-icon"></img></Link></li>
            </ul>
        </div>
    )
}

export default Social;