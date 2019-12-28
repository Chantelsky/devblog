import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import GlobalStyle from '../styles/globalstyles'
import Layout from '../components/layout'
import styled from 'styled-components'

const Wrapper = styled.section`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);

    a {
        text-decoration: none;
        color: #141414;
        font-weight: bold;
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
            <Wrapper>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <p>{props.data.contentfulBlogPost.publishedDate}</p>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                <GlobalStyle />
            </Wrapper>
        </Layout>
    )
}

export default Blog