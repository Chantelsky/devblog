import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
margin-top: 2rem;
letter-spacing: 0.2rem;
font-size: 3rem;
`

const Para = styled.p`
text-align: center;
color:#A9A9A9;
`

const header = () => {
    return (
        <div>
            <Title>Just another DEV blog</Title>
            <Para>A personal blog dedicated to helping Web Developers</Para>
        </div>
    )
}

export default header