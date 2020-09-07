import React, { useEffect } from "react"
import { CONTENT_BOOKMARK_ID } from "../../../helpers/constants"
import smoothscroll from "smoothscroll-polyfill"

// kick off the polyfill!
smoothscroll.polyfill()

/**
 * CoverNextButton
 */
export default ({ coverLoading }) => {
  useEffect(() => {
    const urlHash = window.location.hash
    if (!coverLoading && urlHash && urlHash.indexOf("#jsto") === 0) {
      scrollToTargetAdjusted(urlHash.slice(6))
    }
  }, [coverLoading])

  return (
    <div
      className="m-landing__next t-absolute t-pointer"
      data-target="#anchor-content"
      id="fn-next"
      onClick={scrollToTargetAdjusted}
    ></div>
  )
}

const scrollToTargetAdjusted = ({ scrollToElemId = CONTENT_BOOKMARK_ID }) => {
  var element = document.getElementById(scrollToElemId)
  var headerOffset = 75
  var elementPosition = element.getBoundingClientRect().top + window.scrollY
  var offsetPosition = elementPosition - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}
