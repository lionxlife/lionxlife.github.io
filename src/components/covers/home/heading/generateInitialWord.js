import React, { Fragment } from "react"

/**
 * generateInitialWord
 */
export default ({ initialWordAsArray, headingAnimationDone }) => {
  return headingAnimationDone ? (
    <Fragment>
      <span className="char-hash">#</span>forever
    </Fragment>
  ) : (
    initialWordAsArray.map((letter, i) => {
      return (
        <span
          key={i + letter}
          className={`char char-hidden char-${
            letter === "#" ? "hash" : letter
          }`}
        >
          {letter}
        </span>
      )
    })
  )
}
