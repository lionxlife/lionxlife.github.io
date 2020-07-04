import React from "react"

/**
 * LoadingBanner
 */
export default () => {
  return (
    <div className="m-landing__loading t-absolute t-align--mid-cen has-text-centered">
      <div className="is-inline-block">
        <i className="fas fa-circle-notch fa-spin fa-2x "></i>
      </div>
      <div>Loading</div>
    </div>
  )
}
