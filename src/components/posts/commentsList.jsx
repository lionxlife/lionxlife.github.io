import React from "react"
import convertDateTime from "../../helpers/convertDateTime"

/**
 * components/posts/comments.jsx
 */
export default ({ comments }) => {
  return (
    <div className="tw-mb-200">
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
    <div className="m-comments__item t-animate tw-flex tw-rounded-4px tw-p-50 tw-mb-50 tw-items-center tw-leading-tight">
      <img
        className="m-comments__thumb b-bg-white-ter tw-rounded-full tw-mr-50"
        src={`https://www.gravatar.com/avatar/${email}?d=robohash&s=200`}
      />
      <div>
        <div className="tw-mb-25">
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
          <span className="b-grey-light">on</span> {day} {month} {year}{" "}
          <span className="b-grey-light">said:</span>
        </div>
        {message}
      </div>
    </div>
  )
}
