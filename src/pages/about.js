import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <div className="about-text">
                <p>I enjoy developing fast, responsive, minimalisitc and bold websites using HTML, (S)CSS, JavaScript & React.</p>
                <p>Recently I have been focusing all on learning more about JAMSTACK.</p>
            </div>
            <div className="bg-text">
                <p>In 2015 I graduated from Queensland University of Technology where I completed a degree in Games and Interactive Entertainment. My main focus was Animation and Graphic Design.</p>
                <p>After graduating I spent all my efforts on 3D character art with an attempt to break into the games industry. However, that didn't go as planned as it became more of a hobby than anything else. In 2018 I thought back to how I enjoyed editing my Myspace profile as a teen and the few units of software development I had completed at uni and I switched my efforts and haven't looked back.</p>
                <p>So now in my spare time I enjoy increasing my knowledge with JAMSTACK, writing code and designing in AdobeXD.</p>
                <p>When I'm not at my PC, I'm probably at the beach...</p>
            </div>
        </Layout>
    )
}

export default AboutPage;