import React from "react"
import SEO from "../components/Seo"
// import { Link } from "gatsby"
// import Image from "../components/Image"

import "../styles/styles.scss"
import Layout from "../components/Layout"
import Cover from "../components/covers/home/Cover"
import PostFeedHeading from "../components/bodies/home/PostFeedHeading"
import PostFeed from "../components/bodies/home/PostFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <PostFeedHeading />
    <PostFeed />
  </Layout>
)

export default IndexPage
