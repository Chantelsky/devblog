import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

// const Title = styled.section`
//     position: relative;
//     left: 500px;
//     margin-right: -50px;
//     text-align: center;

// h1 {
//     font-size: 4rem;
// }
// `

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
            <h1>{data.site.siteMetadata.title}</h1>
            <p>A personal blog dedicated to helping Web Developers</p>
        </div>
    )
}

export default Header