import React, { useRef } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import PrevNext from "../components/posts/prevNext"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Cover from "../components/covers/posts"
import WritingMain from "../components/bodies/post/writingMain"
import WritingFooter from "../components/bodies/post/writingFooter"
import Comments from "../components/posts/comments"
import CommentsForm from "../components/posts/commentsForm"

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { title } = post.frontmatter
  const { prev, next } = pageContext
  const contentRef = useRef(null)
  // console.log("page data", data, pageContext)

  return (
    <Layout pageContext={pageContext} refs={{ contentRef }}>
      <SEO title={title} />
      <Cover postInfo={post.frontmatter} />
      <WritingMain postContent={post.html} contentRef={contentRef} />
      <WritingFooter />
      <CommentsForm pageContext={pageContext} />
      <Comments />
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
  }
`
