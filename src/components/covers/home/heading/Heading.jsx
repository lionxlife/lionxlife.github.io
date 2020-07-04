import React, { useRef, useEffect } from "react"
import arrayShuffle from "../../../../helpers/arrayShuffle"

const initialWord = "#lostwords"
const initialWordAsArray = initialWord.split("")

const generateInitialWord = () => {
  return initialWordAsArray.map(letter => {
    return (
      <span
        key={letter}
        className={`char-hidden char-${letter === "#" ? "hash" : letter}`}
      >
        {letter}
      </span>
    )
  })
}

const homeCoverHeading = ({ headingRef, initialWordAsArray }) => {
  const $heading = headingRef.current
  let char = null
  let $char = null

  // shuffle array
  const headingArray = arrayShuffle(initialWordAsArray)

  // first array letter show and remove from array
  const headingInterval = setInterval(() => {
    char = headingArray.shift() // remove 1st array item from array & return it
    char = char === "#" ? "hash" : char // change # to 'hash'

    // find character and show
    $char = [...$heading.childNodes]
      .find(childNode => childNode.className === `char-hidden char-${char}`)
      .setAttribute("class", `char-${char}`)

    if (headingArray.length === 0) {
      clearInterval(headingInterval)
      // on complete, (call function to) loop through words
      // homeCoverHeadingWordSwap($heading)
    }
  }, 300)
}

// home cover heading animation part 2
// const homeCoverHeadingWordSwap = $heading => {
//   console.log("homeCoverHeadingWordSwap init")

//   // object of words + duration to animate through
//   var words = [
//       { word: "#soulwords", delayBefore: 1000, opacity: 0.5 },
//       { word: "#heartwords", delayBefore: 900, opacity: 0.5 },
//       { word: "#lifewords", delayBefore: 800, opacity: 0.5 },
//       { word: "#thislife", delayBefore: 700, opacity: 0.6 },
//       { word: "#ourlives", delayBefore: 600, opacity: 0.6 },
//       { word: "#anadventure", delayBefore: 500, opacity: 0.7 },
//       { word: "#together", delayBefore: 400, opacity: 0.8 },
//       { word: "#sidebyside", delayBefore: 300, opacity: 0.8 },
//       { word: "#asone", delayBefore: 300, opacity: 0.8 },
//       { word: "#doinglife", delayBefore: 300, opacity: 0.8 },
//       { word: "#sharing", delayBefore: 200, opacity: 0.9 },
//       { word: "#experiencing", delayBefore: 200, opacity: 0.9 },
//       { word: "#learning", delayBefore: 200, opacity: 0.9 },
//       { word: "#crying", delayBefore: 200, opacity: 0.9 },
//       { word: "#resting", delayBefore: 200, opacity: 0.9 },
//       { word: "#laughing", delayBefore: 200, opacity: 0.9 },
//       { word: "#enjoying", delayBefore: 200, opacity: 0.9 },
//       { word: "#changing", delayBefore: 200, opacity: 0.9 },
//       { word: "#living", delayBefore: 200, opacity: 0.9 },
//       { word: "#forever", delayBefore: 200, opacity: 1 },
//     ],
//     i = 0,
//     animate = function (index, words) {
//       var timeout = setTimeout(function () {
//         // execute code
//         //console.log(index, words[index].word);
//         $heading.text(words[index].word).css("opacity", words[index].opacity)

//         i++ // increment

//         // end of array, exit loop
//         if (i === words.length) {
//           clearTimeout(timeout)
//           return
//         }

//         // animate next word
//         animate(i, words)
//       }, words[index].delayBefore)
//     }

//   // loop
//   animate(i, words)
// }

/**
 * covers/home/heading/Heading
 */
export default ({ coverLoading }) => {
  const headingRef = useRef(null)
  useEffect(() => {
    homeCoverHeading({ headingRef, initialWordAsArray })
  }, [])

  return (
    <div className="m-landing__heading t-absolute has-text-centered has-text-white t-align--mid">
      <span className="m-landing__h1-home f-h1 cu-text-shadow" ref={headingRef}>
        {generateInitialWord()}
      </span>
    </div>
  )
}
