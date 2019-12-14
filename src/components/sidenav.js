import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'
import { Link } from 'gatsby'
import Footer from '../components/footer'


const CircleImg = styled.img`
border-radius: 100px;
height: 200px;
width: 200px;
margin-left: 2rem;
`

const H2 = styled.h2`
text-align: center;
margin-top: 1rem;
margin-bottom: 10rem;
color: #fff;
font-weight: normal;
`

const SideNav = styled.nav`
height: 100%;
width: 260px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
background: #141414;
overflow-x: hidden;
padding-top: 20px;
`

const LI = styled.li`
text-align: center;
margin: .5rem;

& a {
    text-decoration: none;
    color: #fff;
}

& a:hover {
    color: pink;
}
`

const sidenav = () => {
    return (
        <SideNav>
            <CircleImg src={avatar} alt="chantel avatar"></CircleImg>
            <H2>Chantel-Sky</H2>
            <ul>
                <LI><Link to='/home'>Home</Link></LI>
                <LI><Link to='/about'>About</Link></LI>
                <LI><a href='https://chantelsky.netlify.com' target="_blank" rel="noopener noreferrer">Portfolio</a></LI>
            </ul>
            <Footer></Footer>
        </SideNav>
    )
}

export default sidenav