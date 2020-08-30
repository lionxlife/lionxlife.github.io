import React, { useRef } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import PrevNext from "../components/posts/prevNext"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Cover from "../components/covers/posts"
import Body from "../components/posts/body"
import Comments from "../components/posts/comments"

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const comments = data.allYaml.edges
  const { title } = post.frontmatter
  const { prev, next } = pageContext
  const contentRef = useRef(null)
  console.log("page data", data, pageContext)

  return (
    <Layout pageContext={pageContext} refs={{ contentRef }}>
      <SEO title={title} />
      <Cover postInfo={post.frontmatter} />
      <Body postContent={post.html} contentRef={contentRef} />
      <Comments pageContext={pageContext} comments={comments} />
      {/* {post.frontmatter.image && (
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        )} */}
      {/* <PrevNext prev={prev && prev.node} next={next && next.node} /> */}
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        postYear
        image {
          childImageSharp {
            resize(width: 2000, quality: 85) {
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
    allYaml(filter: { post: { eq: $slug } }) {
      edges {
        node {
          _id
          name
          message
          email
          date
          url
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
