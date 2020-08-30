import React from "react"
import SEO from "../components/seo"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/covers/posts"
// import WritingMain from "../components/bodies/post/writingMain"
// import WritingFooter from "../components/bodies/post/writingFooter"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Cover />
    {/* <WritingMain />
    <WritingFooter /> */}
  </Layout>
)

export default SecondPage
