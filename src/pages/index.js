import React from "react"
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import styled from 'styled-components'
import Blog from '../components/blog'




const Home = styled.h1`
margin-left: 25%;`

const Indexpage = () => (
    <Layout>
        <Home><Blog /></Home>
        <GlobalStyle />
    </Layout>
)

export default Indexpage