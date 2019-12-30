import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import styled from 'styled-components'

const BlogContainer = styled.section`
    position: absolute;
    top: 250px;
    left: 500px;
    margin: 0 2rem;
    

    a {
        text-decoration: none;
        color: #141414;
        font-weight: bold;
    }

    @media (max-width: 1024px) {
        left: 350px;
        top: 200px;
        position: fixed;
        height: auto;
        overflow: auto;
}

`

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <BlogContainer>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <p>{props.data.contentfulBlogPost.publishedDate}</p>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </BlogContainer>
        </Layout>
    )
}

export default Blog