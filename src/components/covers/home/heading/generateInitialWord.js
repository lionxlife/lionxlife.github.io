import React from "react"

/**
 * generateInitialWord
 */
export default initialWordAsArray => {
  return initialWordAsArray.map((letter, i) => {
    return (
      <span
        key={i + letter}
        className={`char-hidden char-${letter === "#" ? "hash" : letter}`}
      >
        {letter}
      </span>
    )
  })
}
