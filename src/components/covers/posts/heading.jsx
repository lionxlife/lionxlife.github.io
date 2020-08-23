import React from "react"
import PostYearReadTime from "../../shared/postYearReadTime"

/**
 * components/covers/posts/heading.jsx
 */
export default ({ postInfo = {} }) => {
  const { title, postYear, wordCount } = postInfo

  return (
    <div className="m-landing__heading t-absolute t-align--mid has-text-centered has-text-white">
      <h1 className="m-landing__h1 f-h1 cu-text-shadow">{title}</h1>
      <div className="has-text-white m-landing__stats f-h4 is-inline-block">
        <PostYearReadTime postYear={postYear} wordCount={wordCount} />
      </div>
    </div>
  )
}
