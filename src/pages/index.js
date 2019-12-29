import React from "react"
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import styled from 'styled-components'
import Blog from '../components/blog'




const Home = styled.main`
    display: flex;
    justify-content: center;
    position: relative;
    left: 70%;
    top: 0%;

    @media (max-width:1440px) {
        left: 55%;
        width: 70%;
    }
`

const Indexpage = () => (
    <Layout>
        <Home><Blog /></Home>
        <GlobalStyle />
    </Layout>
)

export default Indexpage