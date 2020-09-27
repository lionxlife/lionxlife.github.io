import React from "react"
import { Link } from "gatsby"
import PostBlock from "./postBlock"
import PostPlaceHolderBlock from "./postPlaceHolderBlock"

export default ({ postList }) => {
  // console.log("postList", postList)
  const postPlaceholders = Array.from(Array(4 - postList.edges.length))

  return (
    <section className="section is-p0--top is-default">
      <div className="container is-fluid">
        <div className="columns is-multiline">
          {postList.edges.map(({ node }, i) => (
            <div
              key={`post-${i}`}
              className="column is-one-quarter-desktop is-half"
            >
              <Link to={node.fields.slug} className="link">
                <PostBlock post={node} />
              </Link>
            </div>
          ))}
          {postPlaceholders.map((item, index) => (
            <PostPlaceHolderBlock key={`post-placeholder-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
