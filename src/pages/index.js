import React from "react"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
// import Image from "../components/Image"
import "../styles/styles.scss"
import Layout from "../components/Layout"
import Cover from "../components/covers/home"
import PostFeedHeading from "../components/bodies/home/PostFeedHeading"
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
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
