import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.main`
    position: absolute;
    top: 250px;
    left: 500px;
    border: 2px solid pink;
    margin: 0 2rem;
`

const AboutMe = () => {
    return (
        <AboutContainer>
            <h1>About Me</h1>
            <p>Hello! I'm Chantel, a Frontend Developer and Web Designer based in Brisbane, Australia.
            I enjoy building websites using JAMstack as it revolutionizes the way  think about the workflow and provides a simpler developer experience with the outcome of the website performing better.</p>
            <p>The technologies that I am familiar with are:</p>
            <ol>
                <li>▶ JavaScript (ES6+)</li>
                <li>▶ ReactJS</li>
                <li>▶ GatsbyJS</li>
                <li>▶ HTML & (S)CSS</li>
                <li>▶ Styled Components</li>
            </ol>
        </AboutContainer>
    )
}

export default AboutMe