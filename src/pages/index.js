import React from "react"
import GlobalStyle from '../styles/globalstyles'

import SideNav from '../components/sidenav'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header></Header>
            <SideNav></SideNav>
            <GlobalStyle />
        </div>
    )
}

export default IndexPage