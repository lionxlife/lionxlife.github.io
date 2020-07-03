import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/banners/Banner"
import SEO from "../components/Seo"
import WritingMain from "../components/bodies/post/WritingMain"
import WritingFooter from "../components/bodies/post/WritingFooter"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Banner />
    <WritingMain />
    <WritingFooter />
  </Layout>
)

export default SecondPage
