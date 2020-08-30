import React from "react"
import Comments from "./comments"
import CommentsForm from "./commentsForm"

export default ({ pageContext }) => {
  return (
    <section className="section is-p0--top">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2 m-writing override">
            <hr className="default" />
            <p>
              Thanks for reading! You can check out comments below or{" "}
              <a href="/">other writings</a>. Otherwise, see you again soon?
            </p>
            <CommentsForm pageContext={pageContext} />
            <Comments />
          </div>
        </div>
      </div>
    </section>
  )
}
