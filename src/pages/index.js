import React from "react"
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import styled from 'styled-components'
import Blog from '../components/blog'




const Home = styled.main`
    display: flex;
    justify-content: center;
    position: relative;
    left: 80%;
    top: 30%;
`

const Indexpage = () => (
    <Layout>
        <Home><Blog /></Home>
        <GlobalStyle />
    </Layout>
)

export default Indexpage