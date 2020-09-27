import React from "react"
import PostYearReadTime from "../../shared/postYearReadTime"

/**
 * components/bodies/home/postFeed/postBlock.jsx
 */
export default ({ post }) => {
  const { title, image, postYear, wordCount, description } = post.frontmatter
  return (
    <div className="m-pfeed__post">
      <div className="m-pfeed__image t-relative no-overflow">
        <div
          className="m-pfeed__bg t-absolute"
          style={{
            backgroundImage: `url(${image.childImageSharp.resize.src})`,
          }}
        ></div>
      </div>
      <div className="m-pfeed__info no-overflow">
        <h2 className="f-h4 has-text-black m-pfeed__heading no-m">{title}</h2>
        <div className="has-text-black m-pfeed__stats">
          <PostYearReadTime postYear={postYear} wordCount={wordCount} />
        </div>
        <div className="has-text-black m-pfeed__desc">{description}</div>
      </div>
    </div>
  )
}
