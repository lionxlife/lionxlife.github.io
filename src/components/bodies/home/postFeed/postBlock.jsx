import React from "react"
import PostYearReadTime from "../../../shared/postYearReadTime"

/**
 * components/bodies/home/postFeed/postBlock.jsx
 */
export default ({ post }) => {
  const { title, image, postYear, wordCount } = post.frontmatter
  return (
    <div className="m-pfeed__post m-pfeed__post--sec t-relative no-overflow">
      <div
        className="m-pfeed__bg t-absolute"
        style={{ backgroundImage: `url(${image.childImageSharp.resize.src})` }}
      ></div>
      <div className="t-absolute m-pfeed__info m-pfeed__info--sec">
        <h2 className="f-h3 has-text-white cu-text-shadow">{title}</h2>
        <div className="has-text-white m-pfeed__stats is-inline-block">
          <PostYearReadTime postYear={postYear} wordCount={wordCount} />
        </div>
        <div className="m-pfeed__read no-overflow">
          <div className="m-pfeed__read-spacer">
            <strong>
              Read{" "}
              <i className="fas fa-long-arrow-alt-right m-pfeed__arrow"></i>
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
