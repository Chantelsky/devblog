import React from 'react'
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import About from '../components/aboutme'
import styled from 'styled-components'

const Content = styled.section`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    `

const AboutPage = () => {
    return (
        <Layout>
            <Content>
                <About />
            </Content>
            <GlobalStyle />
        </Layout>
    )
}

export default AboutPage