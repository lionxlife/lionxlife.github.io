import React from "react"

/**
 * components/bodies/home/postFeed/postPlaceHolderBlock
 */
export default () => {
  return (
    <div className="column is-6">
      <a
        target="_self"
        className="m-pfeed__post m-pfeed__post--sec is-block t-relative no-overflow t-cursor-def"
      >
        <div
          className="m-pfeed__bg t-absolute"
          style={{ backgroundImage: "url(/images/post-placeholder.jpg)" }}
        ></div>
        <div className="t-absolute m-pfeed__info m-pfeed__info--sec">
          <h2 className="f-h3 has-text-white cu-text-shadow">#null</h2>
          <span className="has-text-white m-pfeed__stats">
            ...words in transit
          </span>
        </div>
      </a>
    </div>
  )
}
