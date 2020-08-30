import React from "react"
import convertDateTime from "../../helpers/convertDateTime"

/**
 * components/posts/comments.jsx
 */
export default ({ comments }) => {
  return (
    <div>
      <h4 className="f-h4">
        {comments.length ? `${comments.length} comments` : "Comments"}
      </h4>
      {comments.length
        ? comments.map(comment => (
            <Comment key={comment.node._id} comment={comment.node} />
          ))
        : "No comments yet, be the first?"}
    </div>
  )
}

const Comment = ({ comment }) => {
  const { date, name, email, url, message } = comment
  const { day, month, year } = convertDateTime(date)

  return (
    <div className="m-comments__item">
      <img
        className="m-comments__thumb"
        src={`https://www.gravatar.com/avatar/${email}?d=robohash`}
      />
      <div>
        <div>
          <strong>
            {url ? (
              <a
                href={url.indexOf("http") === -1 ? `https://${url}` : url}
                target="_blank"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </strong>{" "}
          on {day} {month} {year}
        </div>
        <hr />
        <div>{message}</div>
      </div>
    </div>
  )
}
