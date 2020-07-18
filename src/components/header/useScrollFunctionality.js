import { useEffect, useRef } from "react"
import { HEADER_TRANSITION_HEIGHT } from "../../helpers/constants"
import throttle from "just-throttle"

/**
 * header/useScrollFunctionality
 */
export default () => {
  const refHeader = useRef(null)
  const refProgressBar = useRef(null)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const $header = refHeader.current
      const $progressBar = refProgressBar.current

      if (document.documentElement.scrollTop > HEADER_TRANSITION_HEIGHT) {
        // scroll header
        $header.classList.add("header-page")
        $progressBar.classList.add("t-opacity-100")
      } else {
        // natural header
        $header.classList.remove("header-page")
        $progressBar.classList.remove("t-opacity-100")
      }
    }, 100)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [refHeader, refProgressBar])

  return { refHeader, refProgressBar }
}
