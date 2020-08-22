import React from "react"
import SEO from "../components/Seo"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Cover from "../components/covers"
import WritingMain from "../components/bodies/post/WritingMain"
import WritingFooter from "../components/bodies/post/WritingFooter"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Cover />
    <WritingMain />
    <WritingFooter />
  </Layout>
)

export default SecondPage
