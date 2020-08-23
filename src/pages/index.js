import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
// import Image from "../components/Image"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Cover from "../components/covers/home"
import PostFeedHeading from "../components/bodies/home/postFeedHeading"
import PostFeed from "../components/bodies/home/postFeed"

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <Cover />
      <PostFeedHeading />
      <PostFeed postList={postList} />
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            postYear
            image {
              childImageSharp {
                resize(width: 2000, quality: 75) {
                  src
                }
              }
            }
            wordCount
            tags
            date(formatString: "MMMM Do YYYY")
            description
          }
        }
      }
    }
  }
`
