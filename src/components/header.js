import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Title = styled.header`
    position: absolute;
    left: 500px;
    text-align: center;
    transform: translate(50%,50%);
    background: #fff;
    z-index: -1;
    
    h1 {
        font-size: 3rem;
    }

    @media (max-width: 1440px) {
        left: 300px;
    }

    @media (max-width: 1024px) {
        left: 100px;
    }

    @media (max-width: 768px) {
        left: 100px;
        h1 {
            font-size: 2rem;
        }
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