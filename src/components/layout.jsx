/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, pageContext = {}, refs = {} }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // useEffect(() => {}, [])

  return (
    <>
      <Header
        isPost={pageContext.type === "blog-post"}
        siteTitle={data.site.siteMetadata.title}
        refs={refs}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
