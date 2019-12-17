import React from 'react'
import Sidenav from '../components/sidenav'
import Header from '../components/header'

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <Sidenav />
    </div>
)

export default Layout