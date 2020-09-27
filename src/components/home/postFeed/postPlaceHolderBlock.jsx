import React from "react"

/**
 * components/bodies/home/postFeed/postPlaceHolderBlock
 */
export default () => {
  return (
    <div className="column is-one-quarter-desktop is-half">
      <div className="m-pfeed__post">
        <div className="m-pfeed__image t-relative no-overflow">
          <div
            className="m-pfeed__bg t-absolute"
            style={{ backgroundImage: "url(/images/post-placeholder.jpg)" }}
          ></div>
        </div>
        <div className="m-pfeed__info no-overflow">
          <h2 className="f-h4 has-text-black m-pfeed__heading no-m">
            Words in transit...
          </h2>
          <span className="has-text-black m-pfeed__stats">
            Stay tuned folks.
          </span>
        </div>
      </div>
    </div>
  )
}
