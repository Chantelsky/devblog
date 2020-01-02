import React from 'react'
import styled from 'styled-components'
import avatar from '../images/photo.jpg'
import { Link } from 'gatsby'
import Footer from '../components/footer'


const SidenavContainer = styled.section`
        min-height: 100%;
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
        color: #fff;
        font-weight: normal;
    }

    .links {
        text-align: center;
        margin: .5rem;
    }

    .links a {
        text-decoration: none;
        color: #fff;
    }

    .links a:hover {
        color: #A9A9A9;
    }

    button {
        position:relative;
        transform: translate(-50%, -50%);
        top:50%; 
        left:50%;
        margin: 2rem 0;
        background: #38A1F3;
        border: none;
        padding: 5px 15px;
        text-align: center;
        cursor: pointer;
        font-size: .8rem;
    }
    
    a {
    text-decoration: none;
    color: #fff;
    }

    @media only screen and (max-width: 1440px) {
        button {
            margin: 1rem 0;
        }
    }

    @media only screen and (max-width: 1024px) {
        img {
            height: auto;
        }
    }

    @media only screen and (max-width: 768px) {
        img {
            height: 150px;
            width: 150px;
        }
    }

    @media only screen and (max-width: 425px) and (orientation: portrait){
        max-width: 150px;
        
        img {
            height: 100px;
            width: 100px;
        }

        button {
            padding: 5px 10px;
            margin: 1.5rem 0;
        }

        h2 {
            font-size: 1.25rem;
        }
        .links {
        text-align: center;
        margin: 0 auto;
        padding: 0 2rem;
    }
}
`

const sidenav = () => {
    return (
        <SidenavContainer>
            <img src={avatar} alt="chantel avatar"></img>
            <h2>Chantel-Sky</h2>
            <button><a href="https://twitter.com/chantel_sky" target="_blank" rel="noopener noreferrer">Follow @Chantel_sky</a></button>
            <ul>
                <li class="links"><Link to='/'>Home</Link></li>
                <li class="links"><Link to='/about'>About</Link></li>
                <li class="links"><a href='https://chantelsky.netlify.com' target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
            <Footer></Footer>
        </SidenavContainer>
    )
}

export default sidenav