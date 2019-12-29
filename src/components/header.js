import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Title = styled.header`
    position: fixed;
    left: 500px;
    text-align: center;
    transform: translate(50%,50%);
    
    h1 {
        font-size: 3rem;
    }
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
        <div>
            <Title>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>A personal blog dedicated to helping Web Developers</p>
            </Title>
        </div>
    )
}

export default Header