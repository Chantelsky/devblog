import React from "react"
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import styled from 'styled-components'



const Home = styled.h1`
margin-left: 25%;`

const Indexpage = () => (
    <Layout>
        <Home>Hello</Home>
        <GlobalStyle />
    </Layout>
)

export default Indexpage