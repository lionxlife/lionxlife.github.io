import React from "react"
import { CONTENT_BOOKMARK_ID } from "../../../helpers/constants"

const scrollToTargetAdjusted = () => {
  var element = document.getElementById(CONTENT_BOOKMARK_ID)
  var headerOffset = 75
  var elementPosition = element.getBoundingClientRect().top
  var offsetPosition = elementPosition - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

/**
 * CoverNextButton
 */
export default () => {
  return (
    <div
      className="m-landing__next t-absolute t-pointer"
      data-target="#anchor-content"
      id="fn-next"
      onClick={scrollToTargetAdjusted}
    ></div>
  )
}
