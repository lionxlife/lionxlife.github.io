import { useRef, useEffect } from "react"
import arrayShuffle from "../../../../helpers/arrayShuffle"
import { HOME_COVER_HEAD_WORDS } from "../../../../helpers/constants"

const homeCoverHeading = ({ headingRef, initialWordAsArray }) => {
  const $heading = headingRef.current

  // shuffle array
  const headingArray = arrayShuffle(initialWordAsArray)

  // first array letter show and remove from array
  const headingInterval = setInterval(() => {
    let char = headingArray.shift() // remove 1st array item from array & return it
    char = char === "#" ? "hash" : char // change # to 'hash'

    // find character and show
    const headingCharNodesArray = [...$heading.childNodes]
    headingCharNodesArray
      .find(childNode => childNode.className === `char-hidden char-${char}`)
      .setAttribute("class", `char-${char}`)

    if (headingArray.length === 0) {
      clearInterval(headingInterval)
      // on complete, (call function to) loop through words
      homeCoverHeadingWordSwap($heading)
    }
  }, 300)
}

// home cover heading animation part 2
const homeCoverHeadingWordSwap = $heading => {
  // object of words + duration to animate through
  let i = 0
  const animate = (index, words) => {
    const timeout = setTimeout(function () {
      // execute code
      $heading.innerText = words[index].word
      $heading.style.opacity = words[index].opacity

      i++ // increment
      // end of array, exit loop
      if (i === words.length) {
        clearTimeout(timeout)
        return
      }

      animate(i, HOME_COVER_HEAD_WORDS) // animate next word
    }, words[index].delayBefore)
  }

  // loop
  animate(i, HOME_COVER_HEAD_WORDS)
}

/**
 * useHeadingAnimation
 */
export default initialWordAsArray => {
  const headingRef = useRef(null)
  useEffect(() => {
    homeCoverHeading({ headingRef, initialWordAsArray })
  }, [initialWordAsArray])

  return headingRef
}
