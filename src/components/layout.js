import React from 'react'

import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <Nav />
            {/* JSX passed in */}
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout