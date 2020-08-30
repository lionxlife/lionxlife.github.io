import React from "react"
import { Link } from "gatsby"
import classes from "../../../helpers/classesHandler"
import MainPostBlock from "./mainPostBlock"
import PostBlock from "./postBlock"
import PostPlaceHolderBlock from "./postPlaceHolderBlock"

export default ({ postList }) => {
  // console.log("postList", postList)
  const postPlaceholders = Array.from(Array(3 - postList.edges.length))

  return (
    <section className="section is-p0--top is-sml">
      <div className="container">
        <div className="columns is-multiline">
          {postList.edges.map(({ node }, i) => (
            <div
              key={`post-${i}`}
              className={classes("column", {
                "is-12": i === 0,
                "is-6": i > 0,
              })}
            >
              <Link to={node.fields.slug} className="link">
                {i === 0 ? (
                  <MainPostBlock post={node} />
                ) : (
                  <PostBlock post={node} />
                )}
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
