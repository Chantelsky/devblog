import React from 'react'
import styled from 'styled-components'
import behance from '../images/behance-icon.svg'
import codepen from '../images/codepen-icon.svg'
import github from '../images/github-icon.svg'

const UL = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Footer = styled.footer`
position: fixed;
left: 0;
bottom: 0;
width: 260px;
padding-bottom: 2rem;
`

const Button = styled.button`
position:relative;
transform: translate(-50%, -50%);
top:50%; 
left:50%;
margin-bottom: 2rem;
background: #38A1F3;
border: none;
padding: 15px 32px;
text-align: center;
cursor: pointer;

& a {
text-decoration: none;
color: #fff;
}
`

const Paragraph = styled.p`
color: #fff;
text-align: center;
padding-top: 1rem;
`

const footer = () => {
    return (
        <Footer>
            <Button><a href="https://twitter.com/chantelsky" target="_blank" rel="noopener noreferrer">Follow @Chantel_sky</a></Button>
            <UL>
                <li><a href="https://github.com/Chantelsky" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"></img></a></li>
                <li><a href="https://codepen.io/chantel-sky" target="_blank" rel="noopener noreferrer"><img src={codepen} alt="codepen"></img></a></li>
                <li><a href="https://www.behance.net/chantelsky" target="_blank" rel="noopener noreferrer"><img src={behance} alt="behance"></img></a></li>
            </UL>
            <Paragraph>Created with <span role="img" aria-label="emoji">❤️</span> by Chantel Laver</Paragraph>
        </Footer>
    )
}

export default footer