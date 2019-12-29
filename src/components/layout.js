import React from 'react'
import Sidenav from '../components/sidenav'
import Header from '../components/header'
import GlobalStyle from '../styles/globalstyles'

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <Sidenav />
        <GlobalStyle />
    </div>
)

export default Layout