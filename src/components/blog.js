import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Wrapper = styled.section`
    text-align: center;
    position: relative;
    top: 350px;
    left: 300px;
    transform: translate(50%,-50%);

    a {
        text-decoration: none;
        color: #000;
    }

    p {
        font-size: 1rem;
    }

    li {
        background: #E8E8E8;
        border-radius: 15px;
        padding: 10px 100px;
    }
    `

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: {fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    return (
        <Wrapper>
            <ol className="blog">
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className="blogstyle">
                            <Link to={`${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Wrapper>
    )
}

export default Blog