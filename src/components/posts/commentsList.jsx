import React from "react"
import convertDateTime from "../../helpers/convertDateTime"
import moment from "moment"
import { calcBlogYear } from "../header/timer/useTimer"
import convertBlogYear from "../../helpers/convertBlogYear"

/**
 * components/posts/comments.jsx
 */
export default ({ comments }) => {
  const orderedComments = comments.length ? processComments(comments) : false

  return (
    <div className="tw-mb-200">
      <h4 className="f-h4">
        {orderedComments ? `${orderedComments.length} comments` : "Comments"}
      </h4>
      {orderedComments ? (
        orderedComments.map(comment => (
          <Comment key={comment.node.id} comment={comment.node} />
        ))
      ) : (
        <div className="m-base-c-border t-animate tw-flex tw-rounded-4px tw-p-50 tw-pl-100 tw-items-center tw-leading-tight">
          <i class="fas fa-wind tw-mr-50"></i>...nothing here yet, be the first?
        </div>
      )}
    </div>
  )
}

const Comment = ({ comment }) => {
  const { date, name, link, message } = comment
  const { day, month, year } = convertDateTime(date)
  const randomAvatar = `https://robohash.org/${Math.floor(
    Math.random() * 1000
  )}.png?size=200x200&set=set4` // set4 = cats; https://robohash.org/

  return (
    <div className="m-comments__item m-base-c-border t-animate tw-flex tw-rounded-4px tw-p-50 tw-mb-50 tw-items-center tw-leading-tight">
      <img
        className="m-comments__thumb b-bg-white-ter tw-rounded-full tw-mr-50"
        src={randomAvatar}
      />
      <div>
        <div className="tw-mb-25">
          <strong>
            {link ? (
              <a href={processLink(link)} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </strong>{" "}
          <span className="b-grey-light">on year</span>{" "}
          {calcBlogYear(
            moment(`${day}-${month}-${year}`, "DD-MMM-YYYY").diff(
              moment("01-05-2017", "DD-MM-YYYY"),
              "seconds"
            )
          )}{" "}
          <span className="b-grey-light">said:</span>
        </div>
        {message}
      </div>
    </div>
  )
}

const processComments = comments => {
  // each comment have new key of blogYear from date field
  const commentsBY = comments.map(comment => {
    return {
      node: {
        ...comment.node,
        blogYear: convertBlogYear(comment.node.date),
      },
    }
  })

  // sort comments by blogYear
  return commentsBY.sort((a, b) => {
    return a.node.blogYear - b.node.blogYear
  })
}

const processLink = link => {
  // email
  if (link.indexOf("@") > 0) return `mailto:${link}`

  // otherwise website
  return link.indexOf("http") === -1 ? `https://${link}` : link
}
