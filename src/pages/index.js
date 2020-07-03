import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import BannerHome from "../components/banners/BannerHome"
// import Image from "../components/Image"
import SEO from "../components/Seo"
import "../styles/styles.scss"
import PostFeedHeading from "../components/bodies/home/PostFeedHeading"
import PostFeed from "../components/bodies/home/PostFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerHome />
    <PostFeedHeading />
    <PostFeed />
  </Layout>
)

export default IndexPage
