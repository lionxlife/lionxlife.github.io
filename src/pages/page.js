import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Cover from "../components/covers/posts"
// import { Link } from "gatsby"
// import WritingMain from "../components/bodies/post/writingMain"
// import WritingFooter from "../components/bodies/post/writingFooter"
import "../styles/styles.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Cover />
    {/* <WritingMain />
    <WritingFooter /> */}
  </Layout>
)

export default SecondPage
