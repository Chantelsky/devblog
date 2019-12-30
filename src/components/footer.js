import React from 'react'
import styled from 'styled-components'
import behance from '../images/behance-icon.svg'
import codepen from '../images/codepen-icon.svg'
import github from '../images/github-icon.svg'

const Footercontainer = styled.footer`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        margin: 0 auto;
    }

    p {
        color: #fff;
        text-align: center;
        padding-top: 1rem;
        width: 70%;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        p {
            padding-top: 5rem;
        }
    }
`

const footer = () => {
    return (
        <Footercontainer>
            <ul>
                <li><a href="https://github.com/Chantelsky" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"></img></a></li>
                <li><a href="https://codepen.io/chantel-sky" target="_blank" rel="noopener noreferrer"><img src={codepen} alt="codepen"></img></a></li>
                <li><a href="https://www.behance.net/chantelsky" target="_blank" rel="noopener noreferrer"><img src={behance} alt="behance"></img></a></li>
            </ul>
            <p>Created with <span role="img" aria-label="emoji">❤️</span> by Chantel Laver and powered by GatsbyJS &copy; 2020</p>
        </Footercontainer>
    )
}

export default footer