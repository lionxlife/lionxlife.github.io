import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PrevNext from "../components/posts/prevNext"

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
  const { prev, next } = pageContext

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        {post.frontmatter.image && (
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </div>
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
`
