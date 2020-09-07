import React from "react"
import classes from "../../../../helpers/classesHandler"

/**
 * generateInitialWord
 */
export default ({ initialWordAsArray, headingAnimationDone, coverLoading }) => {
  return headingAnimationDone ? (
    <span
      className={classes("t-animate", {
        "t-opacity-0": coverLoading,
        "tw-opacity-100": !coverLoading,
      })}
    >
      <span className="char-hash">#</span>forever
    </span>
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
