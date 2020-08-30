import React from "react"
import CommentsList from "./commentsList"
import CommentsForm from "./commentsForm"

export default ({ pageContext, comments }) => {
  return (
    <section className="section is-p0--top">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="m-writing override">
              <hr className="default" />
              <p>
                Thanks for reading! You can check out comments below or{" "}
                <a href="/">other writings</a>. Otherwise, see you again soon?
              </p>
            </div>
            <CommentsList comments={comments} />
            <CommentsForm pageContext={pageContext} />
          </div>
        </div>
      </div>
    </section>
  )
}
