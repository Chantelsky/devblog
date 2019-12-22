import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

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
        <div>
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
        </div>
    )
}

export default Blog