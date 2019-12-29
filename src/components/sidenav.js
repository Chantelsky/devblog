import React from 'react'
import styled from 'styled-components'
import avatar from '../images/photo.jpg'
import { Link } from 'gatsby'
import Footer from '../components/footer'


const SidenavContainer = styled.section`
        min-height: 100vh;
        min-width: 200px;
        max-width: 300px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background: #141414;
        overflow-x: hidden;
        padding-top: 20px;

    img {
        border-radius: 100px;
        height: 200px;
        width: 200px;
        position:relative;
        transform: translate(-50%, 0%);
        left:50%;
    }

    h2 {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 10rem;
        color: #fff;
        font-weight: normal;
    }
    
    li {
        text-align: center;
        margin: .5rem;
    }

    li a {
        text-decoration: none;
        color: #fff;
    }

    li a:hover {
        color: #A9A9A9;
    }
`

const sidenav = () => {
    return (
        <SidenavContainer>
            <img src={avatar} alt="chantel avatar"></img>
            <h2>Chantel-Sky</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><a href='https://chantelsky.netlify.com' target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
            <Footer></Footer>
        </SidenavContainer>
    )
}

export default sidenav