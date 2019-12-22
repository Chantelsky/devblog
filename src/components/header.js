import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Title = styled.h1`
text-align: center;
margin-top: 2rem;
letter-spacing: 0.2rem;
font-size: 3rem;
margin-top: 150px;
`

const Subheading = styled.p`
text-align: center;
color:#A9A9A9;
`

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header>
            <Title>{data.site.siteMetadata.title}</Title>
            <Subheading>A personal blog dedicated to helping Web Developers</Subheading>
        </header>
    )
}

export default Header