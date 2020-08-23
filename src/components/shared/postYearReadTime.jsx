import React from "react"
import convertWordsToTime from "../../helpers/convertWordsToTime"

/**
 * components/shared/postYearReadTime.jsx
 */
export default ({ postYear, wordCount }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>
        Year <strong>{postYear}</strong>
      </span>
      <span
        className="is-inline-block"
        style={{ fontSize: "0.5em", margin: "0 0.5rem" }}
      >
        <i class="far fa-clock"></i>
      </span>
      <span>
        <strong>{convertWordsToTime(wordCount)}</strong> min read
      </span>
    </div>
  )
}
