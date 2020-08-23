import React, { useEffect } from "react"
import generateInitialWord from "./generateInitialWord"
import useHeadingAnimation from "./useHeadingAnimation"

const initialWord = "#lostwords"
const initialWordAsArray = initialWord.split("")

/**
 * covers/home/heading/Heading
 */
export default ({ coverLoading }) => {
  const headingAnimationDone =
    typeof window !== `undefined`
      ? sessionStorage.getItem("heading_animation_done")
      : false
  const headingRef = useHeadingAnimation({
    initialWordAsArray,
    coverLoading,
    headingAnimationDone,
  })

  return (
    <div className="m-landing__heading t-absolute has-text-centered has-text-white t-align--mid">
      <span className="m-landing__h1-home f-h1 cu-text-shadow" ref={headingRef}>
        {generateInitialWord({ initialWordAsArray, headingAnimationDone })}
      </span>
    </div>
  )
}
