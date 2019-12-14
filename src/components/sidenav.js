import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'


const CircleImg = styled.img`
border-radius: 100px;
height: 200px;
width: 200px;
margin-left: 2rem;
`

const SideNav = styled.nav`
height: 100%;
width: 260px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
background: #000;
overflow-x: hidden;
padding-top: 20px;
`

const sidenav = () => {
    return (
        <SideNav>
            <CircleImg src={avatar} alt="chantel avatar"></CircleImg>
        </SideNav>
    )
}

export default sidenav