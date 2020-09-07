import React from "react"
import PostYearReadTime from "../../shared/postYearReadTime"
import classes from "../../../helpers/classesHandler"

/**
 * components/covers/posts/heading.jsx
 */
export default ({ postInfo = {}, coverLoading }) => {
  const { title, postYear, wordCount } = postInfo

  return (
    <div
      className={classes(
        "m-landing__heading t-absolute t-align--mid has-text-centered has-text-white t-animate",
        {
          "t-opacity-0": coverLoading,
          "tw-opacity-100": !coverLoading,
        }
      )}
    >
      <h1 className="m-landing__h1 f-h1 cu-text-shadow">{title}</h1>
      <div className="has-text-white m-landing__stats f-h4 is-inline-block">
        <PostYearReadTime postYear={postYear} wordCount={wordCount} />
      </div>
    </div>
  )
}
