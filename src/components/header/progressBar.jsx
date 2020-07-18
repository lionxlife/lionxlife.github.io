import React from "react"

export default ({ refProgressBar }) => {
  return (
    <div className="g-progress t-fixed" ref={refProgressBar}>
      <div className="g-progress__bar" id="fn-bar"></div>
    </div>
  )
}
